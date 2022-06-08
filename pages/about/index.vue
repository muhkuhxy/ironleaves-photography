<template>
  <div>
    <AboutIntro />
    <AboutCv />
    <AboutMe />
    <AboutStyle />
    <AboutFaq 
      :document="faqDoc" />
    <ContactLink />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { FetchReturn } from '@nuxt/content/types/query-builder'
import { Context } from '@nuxt/types'

interface Data {
  faqDoc?: FetchReturn
}

export default Vue.extend({
  async asyncData({ $content }: Context): Promise<Data> {
    const faqDoc = await $content('about/faq').fetch() as FetchReturn
    return { faqDoc }
  },
  data: () => ({} as Data),
})
</script>