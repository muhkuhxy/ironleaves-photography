<template>
  <div>
    <LooksIntro :document="documents.intro" />

    <LooksComparison />
    
    <LooksAspects />
    
    <LooksHowTo />
    
    <LooksTips />
    
    <ContactLink />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { FetchReturn } from '@nuxt/content/types/query-builder'
import { Context } from '@nuxt/types'
import { zipObject } from '~/lib/collections'

interface Data {
  documents: Record<string, FetchReturn>
}

export default Vue.extend({
  async asyncData({ $content }: Context): Promise<Data> {
    const documents = await $content('looks').fetch() as FetchReturn[]
    const keys = ['intro']
    return { documents: zipObject(keys, documents) }
  },
  data: () => ({} as Data),
})
</script>