<template>
  <SectionParent class="text-bluegray">
    <IlStory :slides="document.slides">
      <template #image>
        <div class="relative w-[95%] lg:w-1/2 self-start lg:self-center flex-initial">
          <img
            class="w-7/8 border-8 border-solid border-white drop-shadow"
            :src="require(`~/assets/images/${document.imgSrc}`)"
            :alt="document.imgAlt">
          <SvgSingleBranch class="w-1/4 text-emerald fill-current absolute right-0 bottom-0 -translate-x-1 translate-y-4" />
        </div>
      </template>

      <template #title>
        <SectionHeader>
          <template #roofline>{{ labels[document.tag] }}</template>
          {{ document.title }}
        </SectionHeader>
      </template>

      <template #content>
        <NuxtContent :document="{ body: document.excerpt }"></NuxtContent>
      </template>

      <template #telling>
        <NuxtContent :document="telling"></NuxtContent>
      </template>
    </IlStory>
  </SectionParent>
</template>

<script lang="ts">
import Vue from 'vue'
import { FetchReturn } from '@nuxt/content/types/query-builder'
import { labels } from '@/lib/blog'

interface Data {
  document?: FetchReturn
}

interface Body {
  children: any[]
}

export default Vue.extend({
    async asyncData({ params, $content }) {
        const slug = params.slug;
        const document = await $content(`stories/${slug}`).fetch() as FetchReturn;
        return { document };
    },
    data: (): Data => ({}) as Data,
    computed: {
        labels: () => labels,
        telling() {
          if (this.document) {
            const [, ...children] = (this.document.body as Body).children
            return { body: { children } }
          }
          return { body: { children: [] } }
        }
    },
})
</script>
