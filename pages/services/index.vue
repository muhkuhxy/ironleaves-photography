<template>
  <div>
    <ServicesIntro />
    <ServicesList />
    <ServicesInvestment />
    <ServicesPricing />
    <ServicesPackages 
      :document="packagesDocument" />
    <ContactLink />
    <ServicesPointers />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { FetchReturn } from '@nuxt/content/types/query-builder'
import { Context } from '@nuxt/types'

interface Data {
  packagesDocument?: FetchReturn
}

export default Vue.extend({
  async asyncData({ $content }: Context): Promise<{ packagesDocument: FetchReturn }> {
    const packagesDocument = await $content('services/packages').fetch() as FetchReturn
    return { packagesDocument }
  },
  data: () => ({} as Data),
})
</script>