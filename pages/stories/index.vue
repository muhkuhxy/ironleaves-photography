<template>
  <SectionParent class="text-bluegray relative">
    <SectionContent class="slide-up">
      <div class="slide-up lg:flex-initial max-w-prose lg:max-w-[none] lg:w-1/2">
        <SectionHeader>
          <template #roofline>Stories</template>
          Immer auf dem Laufenden
        </SectionHeader>
        <LayoutSpacer />
        <p>
          Erhaltet hier einen exklusiven Einblick in die wunderschönen Hochzeiten, die ich begleiten durfte! Außerdem gebe ich euch hilfreiche Tipps und Tricks, wie ihr Euren wichtigen Tag gestalten könnt und was ihr für Euren Hochzeitsfotografen beachten müsst.
        </p>
      </div>
      <LayoutSpacer />
      <ul class="flex justify-between">
        <li class="py-2">Filter nach:</li>
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
    </SectionContent>

    <div class="bg-dust">
      <SectionContent>
        <div v-if="!articles.length && !loading" class="text-center transition-all">
          Sorry, dazu gibt's bislang noch keine Stories.
        </div>
        <transition-group
          tag="div"
          name="fade"
          class="relative grid grid-cols-2 place-content-center gap-x-12 gap-y-12"
          @after-leave="loading = false">
          <div
            v-for="(article) in articles"
            :key="article.path"
            :data-tag="article.tag"
            class="flex flex-col justify-center gap-6 bg-white text-center px-8 pt-4 pb-8 drop-shadow">
            <h3 class="text-sunset uppercase -mb-2">{{ labels[article.tag] }}</h3>
            <img
                :src="require(`~/assets/images/${article.imgSrc}`)"
                :alt="article.imgAlt">
              <h2 class="font-bold">{{ article.title }}</h2>
              <NuxtContent class="flex-grow" :document="{ body: article.excerpt }" />
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
import { contentFunc } from '@nuxt/content/types/content'
import { Context } from '@nuxt/types'

const tags = [
  { label: 'Stories', tag: 'stories', },
  { label: 'Informationen', tag: 'infos', },
  { label: 'Tipps & Tricks', tag: 'tipps', },
  { label: 'Lorem', tag: 'lorem', },
  { label: 'Ipsum', tag: 'ipsum', },
]

interface Data {
  query: string
  labels: Record<string, string>
  tags: string[]
  articles: FetchReturn[],
  loading: boolean
}

function fetchContent({ $content }: { $content: contentFunc }, tag?: string): Promise<FetchReturn[]> {
  let content = $content('stories').sortBy('createdAt', 'desc')
  if (tag) {
    content = content.where({tag})
  }
  return content.fetch() as Promise<FetchReturn[]>
}

export default Vue.extend({
  async asyncData(context: Context): Promise<{ articles: FetchReturn[]}> {
    const articles = await fetchContent(context)
    return { articles }
  },
  data: () => ({
    query: '',
    labels: tags.reduce( (result, {tag, label}) => {
      result[tag] = label
      return result
    }, {} as Record<string, string>),
    tags: tags.map(_ => _.tag),
    loading: false
  } as Data),
  methods: {
    async filter(tag: string): Promise<void> {
      this.query = tag
      this.articles = await fetchContent(this, tag)
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