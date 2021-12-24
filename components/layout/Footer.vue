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
      <div class="grid grid-cols-2 md:grid-cols-3 items-end gap-x-6">
        <div class="mt-4 md:mt-0 text-center md:text-left row-start-2 row-end-2 md:row-start-1 md:row-end-1 col-span-2 md:col-span-1">
          &copy; Tamara Loeffen &ndash; Ironleaves Photography {{ year }}
        </div>
        <ul class="md:text-center">
          <li>Leistungen</li>
          <li><NuxtLink to="/stories">Blog</NuxtLink></li>
          <li>Bildlooks</li>
        </ul>
        <ul class="md:text-right">
          <li>
            <NuxtLink to="/agbs">AGBs</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/datenschutz">Datenschutz</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/impressum">Impressum</NuxtLink>
          </li>
        </ul>
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
