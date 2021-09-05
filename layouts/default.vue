<template>
  <div>
    <NavBar />
    <main>
      <Nuxt/>
    </main>
    <footer class="text-bluegray flex justify-between p-4 md:p-8 flex-col md:flex-row gap-4 text-center">
      <ul class="flex justify-center gap-4">
        <!-- TODO links einfügen -->
        <li>
          AGBs
        </li>
        <li>
          Datenschutz
        </li>
        <li>
          Impressum
        </li>
      </ul>
      <hr>
      <span>&copy; Tamara Loeffen &ndash; Ironleaves Design {{ year }}</span>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    year: () => new Date().getFullYear()
  }
})
</script>
