<template>
  <footer class="text-bluegray pt-8 relative bg-white">
    <LayoutContainer>
      <LayoutSpacer />
      <h2 class="font-bold">Folgt mir auf Instagram!</h2>
      <LayoutSpacer />
      <div id="curator-feed-default-feed-layout">
        <a href="https://curator.io" target="_blank" class="text-bluegray text-sm crt-logo crt-tag">Powered by Curator.io</a>
      </div>
      <LayoutSpacer />
      <hr class="md:hidden mb-8" />
      <!-- <LayoutSpacer class="md:hidden" /> -->
      <div class="grid grid-cols-3 lg:grid-cols-[2fr,1fr,1fr,1fr] lg:grid-rows-[(repeat(3,auto))] gap-x-4 gap-y-1 auto-rows-auto grid-flow-col text-center">
        <div class="row-start-4 lg:row-start-1 lg:row-span-3 col-start-1 col-span-3 lg:col-span-1 self-end text-center mt-2 lg:mt-0 lg:text-left">&copy; Tamara Loeffen &ndash; Ironleaves Photography {{ year }}</div>
        <div title="Coming soon">Leistungen</div>
        <NuxtLink to="/stories">Blog</NuxtLink>
        <div title="Coming soon">Bildlooks</div>
        <a target="_blank" href="https://instagram.com/ironleaves_photography/">Instagram</a>
        <a target="_blank" href="https://www.facebook.com/Ironleaves-Photography-110234704840320">Facebook</a>
        <a target="_blank" href="https://www.pinterest.de/ironleaves_photography">Pinterest</a>
        <NuxtLink to="/agbs">AGBs</NuxtLink>
        <NuxtLink to="/datenschutz">Datenschutz</NuxtLink>
        <NuxtLink to="/impressum">Impressum</NuxtLink>
      </div>
    </LayoutContainer>
    <a href="https://ironleaves-design.com" target="_blank" class="mt-4 py-2 block underline text-center bg-bluegray text-white">Designed by Ironleaves Design</a>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    year: () => new Date().getFullYear()
  }
})
</script>
