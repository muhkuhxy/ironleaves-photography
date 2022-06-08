<template>
  <div>
    <AboutIntro
      :document="introDoc" />

    <AboutCv />

    <AboutMe />

    <AboutStyle />

    <AboutFaq 
      :document="faqDoc" />

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

interface Data {
  introDoc?: FetchReturn
  faqDoc?: FetchReturn
}

export default Vue.extend({
  async asyncData({ $content }: Context): Promise<Data> {
    const introPromise = $content('about/1-intro').fetch() as Promise<FetchReturn>
    const faqPromise = $content('about/5-faq').fetch() as Promise<FetchReturn>
    const [introDoc, faqDoc] = await Promise.all([introPromise, faqPromise])
    return { introDoc, faqDoc }
  },
  data: () => ({} as Data),
})
</script>