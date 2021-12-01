<template>
  <footer class="text-bluegray flex justify-between pb-4 pt-8 px-8 flex-col md:flex-row gap-4 text-center">
    <ul class="flex justify-center gap-4">
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
    <hr>
    <span>&copy; Tamara Loeffen &ndash; Ironleaves Design {{ year }}</span>
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
