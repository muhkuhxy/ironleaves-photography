<template>
  <div>
    <ServicesIntro />

    <ServicesList />
    
    <ServicesInvestment />

    <ServicesPricing />

    <ServicesPackages 
      :document="packagesDocument" />

    <ContactLink />

    <LayoutSpacer />

    <IconBase class="text-sunset w-full h-16 -translate-y-4">
      <IconArrow />
    </IconBase>

    <ServicesPointers 
      :document="pointersDocument" />

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
  packagesDocument?: FetchReturn
  pointersDocument?: FetchReturn
}

export default Vue.extend({
  async asyncData({ $content }: Context): Promise<Data> {
    const packagesDocument = await $content('services/packages').fetch() as FetchReturn
    const pointersDocument = await $content('services/pointers').fetch() as FetchReturn
    return { packagesDocument, pointersDocument }
  },
  data: () => ({} as Data),
})
</script>