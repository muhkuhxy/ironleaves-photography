<template>
  <SectionParent class="text-bluegray relative">
    <SectionContent class="">
      <div class="relative max-w-prose md:ml-[33%] md:py-16">
        <SvgPetalFlower class="text-emerald fill-current absolute invisible md:visible h-[90%] mt-[-5%] translate-x-[calc((100%+2rem)*-1)] rotate-[-15deg]" />
        <SectionHeader>
          <template #roofline>Stories</template>
          Immer auf dem Laufenden
        </SectionHeader>
        <LayoutSpacer />
        <p>
          Erhaltet hier einen exklusiven Einblick in die wunderschönen Hochzeiten, die ich begleiten durfte! Außerdem gebe ich euch hilfreiche Tipps und Tricks, wie ihr Euren wichtigen Tag gestalten könnt und was ihr für Euren Hochzeitsfotografen beachten müsst.
        </p>
      </div>
      <div class="col-span-2">
        <LayoutSpacer />
        <ul class="hidden md:flex items-center justify-between">
          <li>Filter nach:</li>
          <template v-for="tag in tags">
            <ButtonCategory
              :key="`story-filter-${tag}`"
              :query="query"
              :tag="tag"
              :label="labels[tag]"
              class="py-2 md:px-2 lg:px-4 transition-all hover:-translate-y-0.5 hover:shadow-md active:hover:translate-y-0"
              @click="filter($event)" />
          </template>
        </ul>
        <div v-click-outside="() => showingFilters = false" class="md:hidden">
          <button
            class="w-full flex justify-between items-center cursor-pointer"
            @click="showingFilters = !showingFilters">
            <span>Filter {{ showingFilters ? 'einklappen' : 'ausklappen' }}</span>
            <IlToggleArrow :open="showingFilters" shadow-class="[--shadow-size:2px]" />
          </button>
          <TransitionGrow>
            <ul v-show="showingFilters" class="divide-y">
              <ButtonCategory
                v-for="tag in tags"
                :key="`story-filter-${tag}-md`"
                :query="query"
                :tag="tag"
                :label="labels[tag]"
                class="py-2 cursor-pointer first:mt-2"
                @click="filter($event)" />
            </ul>
          </TransitionGrow>
        </div>

      </div>
    </SectionContent>

    <BlogStories
      :articles="articles"
      :loading="loading"
      @loading="loading = $event">
    </BlogStories>
  </SectionParent>
</template>

<script lang="ts">
import Vue from 'vue'
import { FetchReturn } from '@nuxt/content/types/query-builder'
import { Context } from '@nuxt/types'
import { gsap } from '@/lib/gsap'
import { tagIds, labels, fetchStories } from '@/lib/blog'

interface Data {
  query: string
  labels: Record<string, string>
  tags: string[]
  articles: FetchReturn[],
  loading: boolean
  showingFilters: boolean
}

export default Vue.extend({
  scrollToTop: true,
  async asyncData(context: Context): Promise<{ articles: FetchReturn[]}> {
    const articles = await fetchStories(context)
    return { articles }
  },
  data: () => ({
    query: '',
    labels,
    tags: tagIds,
    loading: false,
    showingFilters: false
  } as Data),
  methods: {
    async filter(tag: string): Promise<void> {
      this.query = tag
      const oldSize = this.articles.length
      this.articles = await fetchStories(this, { tag })
      const shrinking = oldSize > this.articles.length
      this.loading = true
      const fadingElementSelector = '[data-tag]' + (tag ? `:not([data-tag=${tag}])` : '')
      this.$el.querySelectorAll(fadingElementSelector).forEach(el=> {
        if (el instanceof HTMLElement) {
          el.style.left = `${el.offsetLeft}px`
          el.style.top = `${el.offsetTop}px`
          el.style.width = `${el.clientWidth}px`
          el.style.height = `${el.clientHeight}px`
        }
      })
      if (shrinking) {
        const container = this.$el.querySelector('.grid.relative')
        if (container instanceof HTMLElement) {
          container.style.height = `${container.clientHeight}px`
          gsap.to(container,
            {height: 'auto', duration: 0.5, delay: 0.25})
        }
      }
    }
  },
})
</script>
