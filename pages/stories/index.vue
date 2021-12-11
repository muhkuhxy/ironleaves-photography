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
        <ul class="flex items-center justify-between">
          <li>Filter nach:</li>
          <template v-for="tag in tags">
            <ButtonCategory
              :key="`story-filter-${tag}`"
              :query="query"
              :tag="tag"
              :label="labels[tag]"
              class="py-2 px-4 transition-all hover:-translate-y-0.5 hover:shadow-md active:hover:translate-y-0"
              @click="filter($event)" />
          </template>
        </ul>
      </div>
    </SectionContent>

    <div class="bg-dust">
      <SectionContent>
        <div v-if="!articles.length && !loading" class="text-center transition-all">
          Sorry, dazu gibt's bislang noch keine Stories.
        </div>
        <transition-group
          tag="div"
          name="fade"
          class="relative grid grid-cols-2 auto-rows-[1fr] place-content-center gap-x-12 gap-y-12"
          @after-leave="loading = false">
          <div
            v-for="(article) in articles"
            :key="article.path"
            :data-tag="article.tag"
            class="flex flex-col justify-center gap-6 bg-white text-center px-8 pt-4 pb-8 drop-shadow">
            <div class="text-sunset uppercase -mb-2">{{ labels[article.tag] }}</div>
            <img
                :src="require(`~/assets/images/${article.imgSrc}`)"
                :alt="article.imgAlt">
              <h2 class="font-bold">{{ article.title }}</h2>
              <NuxtContent class="grow" :document="{ body: article.excerpt }" />
              <NuxtLink class="text-sunset mx-auto" :to="article.path">
                <ButtonEffect>Hier geht's zur Story</ButtonEffect>
              </NuxtLink>
          </div>
        </transition-group>
      </SectionContent>
    </div>
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
}

export default Vue.extend({
  async asyncData(context: Context): Promise<{ articles: FetchReturn[]}> {
    const articles = await fetchStories(context)
    return { articles }
  },
  data: () => ({
    query: '',
    labels,
    tags: tagIds,
    loading: false
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

<style lang="postcss" scoped>
.fade-enter-active, .fade-leave-active, .fade-move {
  transition: all 0.75s ease-out;
}

.fade-leave-active {
  position: absolute;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
