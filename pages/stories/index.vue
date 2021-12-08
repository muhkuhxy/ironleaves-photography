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
        <li>Filter nach:</li>
        <template v-for="tag in tags">
          <ButtonCategory
            :key="`story-filter-${tag}`"
            :query="query"
            :tag="tag"
            :label="labels[tag]"
            @click="filter($event)" />
        </template>
      </ul>
    </SectionContent>

    <div class="bg-dust">
      <SectionContent>
        <div v-if="!articles.length">Bisher noch keine Stories dieser Art</div>
        <transition-group
          tag="div"
          :css="false"
          class="grid grid-cols-2 place-content-center gap-x-12 gap-y-12">
          <div
            v-for="(article) in articles"
            :key="article.path"
            :data-path="article.path"
            class="flex flex-col justify-center gap-6 bg-white text-center px-8 pt-4 pb-8 drop-shadow transition-all duration-700">
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
import { gsap } from '@/lib/gsap'

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
  articles: any[]
}

export default Vue.extend({
  async asyncData({ $content }): Promise<{ articles: FetchReturn[]}> {
    const articles = (await $content('stories').sortBy('createdAt', 'desc').fetch())
      .map( (article: FetchReturn) => ({
        ...article,
        removing: false
      }))
    return { articles }
  },
  data: () => ({
    query: '',
    labels: tags.reduce( (result, {tag, label}) => {
      result[tag] = label
      return result
    }, {} as Record<string, string>),
    tags: tags.map(_ => _.tag)
  } as Data),
  methods: {
    async filter(tag: string): Promise<void> {
      this.query = tag
      let content = this.$content('stories').sortBy('createdAt', 'desc')
      if (tag) {
        content = content.where({tag})
      }
      const newArticles = (await content.fetch()) as FetchReturn[]
      if (tag) {
        const elements = this.articles
          .filter(article => article.tag !== tag)
          .map(article =>
            this.$el.querySelector(`[data-path="${article.path}"]`))
        if (elements.length) {
          gsap.to(elements, {
            opacity: 0,
            duration: 1,
            ease: 'expo.out',
            onComplete: () => {
              console.log('onComplete')
              this.articles = newArticles
              console.log('done')
            }
          })
          return
        }
      }
      this.articles = newArticles
    }
  },
})
</script>
