<template>
  <div>
    <AboutIntro
      :document="documents.intro" />

    <AboutCv />

    <AboutMe />

    <AboutStyle />

    <AboutFaq
      :document="documents.faq" />

    <IconBase class="text-sunset w-full h-16">
      <IconArrow />
    </IconBase>

    <LayoutSpacer />

    <ContactLink />

    <LayoutSpacer />

    <IconBase class="text-sunset w-full h-16 translate-y-12 relative z-10">
      <IconArrow />
    </IconBase>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { FetchReturn } from '@nuxt/content/types/query-builder'
import { Context } from '@nuxt/types'
import { scrollToTop } from '@/lib/functions'
import { zipObject } from '@/lib/collections'

interface Data {
  documents: Record<string, FetchReturn>
}

export default Vue.extend({
  async asyncData({ $content }: Context): Promise<Data> {
    const documents = await $content('about').fetch() as FetchReturn[]
    const keys = documents.map(_ => _.slug.split('-', 2)[1])
    return { documents: zipObject(keys, documents) }
  },
  data: () => ({} as Data),
  mounted() {
    this.$nextTick(() => scrollToTop(false))
  }
})
</script>
