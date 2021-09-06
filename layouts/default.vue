<template>
  <div class="min-h-screen flex flex-col">
    <IlNavBar @scrollTo="scrollTo" />
    <main class="flex-1">
      <Nuxt @scrollTo="scrollTo" />
    </main>
    <IlFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
let retries = 0
export default Vue.extend({
  created() {
    this.$nuxt.$on('scrollTo', this.scrollTo)
  },
  methods: {
    scrollTo(clazz: string) {
      if (this.$route.path !== '/') {
        this.$router.push({ path: '/', query: { go: clazz } })
      } else {
        const target = document.querySelector(`.scroll-target-${clazz}`)
        target?.scrollIntoView({ behavior: 'smooth' })
        if (this.$route.query.go) {
          if (target) {
            // done
            this.$router.push({ path: '/' })
          } else if (retries < 10) {
            window.setTimeout(() => this.scrollTo(clazz), 300)
            retries++
          }
        }
      }
    }

  }
})
</script>
