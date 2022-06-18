<template>
  <div>
    <LooksIntro :document="documents.intro" />

    <LooksComparison :document="documents.comparison" />

    <IconBase class="text-sunset w-full h-16 translate-y-8">
      <IconArrow />
    </IconBase>

    <LooksAspects
      :document="documents.aspects" />

    <LayoutSpacer />

    <LooksHowTo
      :document="documents.howto"/>

    <IconBase class="text-sunset w-full h-16 -translate-y-6">
      <IconArrow />
    </IconBase>

    <LooksTips
      :document="documents.tips" />

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
import { zipObject } from '@/lib/collections'
import { scrollToTop } from '~/lib/functions'

interface Data {
  documents: Record<string, FetchReturn>
}

export default Vue.extend({
  async asyncData({ $content }: Context): Promise<Data> {
    const documents = await $content('looks').fetch() as FetchReturn[]
    const keys = documents.map(_ => _.slug.split('-', 2)[1])
    return { documents: zipObject(keys, documents) }
  },
  data: () => ({} as Data),
  mounted() {
    this.$nextTick(() => scrollToTop(false))
  }
})
</script>
