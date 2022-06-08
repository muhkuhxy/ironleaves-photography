<template>
  <SectionParent class="text-bluegray">
    <IlStory
      :slides="document.slides"
      :chapters="chapters">
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

    </IlStory>

    <IconBase class="text-sunset w-full h-16 mt-8">
      <IconArrow />
    </IconBase>

    <LayoutSpacer />

    <SectionHeader class="mx-auto text-center">
      <template #roofline>Stories</template>
      Neueste Beiträge
    </SectionHeader>

    <LayoutSpacer />

    <BlogStories :articles="articles">
      <template #tail>
        <LayoutSpacer />

        <NuxtLink to="/stories">
          <ButtonEffect class="text-sunset w-[fit-content] mx-auto">
            Hier gibt's alle Beiträge
          </ButtonEffect>
        </NuxtLink>

        <LayoutSpacer :ms="4" />

        <IconBase class="text-sunset w-full h-16 mt-8 absolute bottom-0 -mb-10">
          <IconArrow />
        </IconBase>
      </template>
    </BlogStories>

    <Contact class="mt-20" />
  </SectionParent>
</template>

<script lang="ts">
import Vue from 'vue'
import { FetchReturn } from '@nuxt/content/types/query-builder'
import { Context } from '@nuxt/types'
import { labels, fetchStories } from '@/lib/blog'
import { splitChapters, Node } from '@/lib/content'

interface Data {
  document?: FetchReturn
  articles: FetchReturn[]
  slug?: string
}

export default Vue.extend({
  scrollToTop: true,
  async asyncData({ params, $content }: Context): Promise<{ document: FetchReturn, articles: FetchReturn[], slug: string }> {
      const slug = params.slug
      const document = await $content(`stories/${slug}`).fetch() as FetchReturn
      const articles = await fetchStories({ $content }, { limit: 2, where: { slug: { $ne: slug } } })
      return { document, articles, slug }
  },
  data: () => ({} as Data),
  computed: {
    labels: () => labels,
    chapters(): { children: Node[], img: string }[] {
      return splitChapters(this.document?.body as Node)
        .map((children, index) => ({
          children,
          img: this.document?.storyTellingImgs[index]
        }))
    },
  },
})
</script>
