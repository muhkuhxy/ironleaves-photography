<template>
  <div class="min-h-screen flex flex-col">
    <IlNavBar @scrollTo="scrollTo" />
    <main class="flex-1">
      <Nuxt @scrollTo="scrollTo" />
    </main>
    <IlFooter />
  </div>
</template>

<script>
import Vue from 'vue'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@/tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig)
const breakpoints = Object.entries(fullConfig.theme.screens)
  .reduce((result, [breakpoint, value]) => {
    result[breakpoint] = parseInt(value, 10)
    return result
  }, {})

let retries = 0

export default Vue.extend({
  provide() {
    return {
      '$il': {
        breakpoints: this.breakpoints
      }
    }
  },
  data: () => ({
    breakpoints: {
      gtsm: false,
      gtmd: false,
      gtlg: false,
      gtxl: false,
      gt2xl: false
    }
  }),
  mounted() {
    this.$nuxt.$on('scrollTo', this.scrollTo)
    this.$nextTick(() => this.updateBreakpoints())
    window.addEventListener('resize', this.updateBreakpoints)
  },
  methods: {
    updateBreakpoints() {
      Object.entries(breakpoints)
        .reduce((result, [breakpoint, value]) => {
          result[`gt${breakpoint}`] = window.innerWidth >= value
          return result
        }, this.breakpoints)
    },
    scrollTo(clazz) {
      if (this.$route.path !== '/') {
        this.$router.push({ path: '/', query: { go: clazz } })
      } else {
        const target = document.querySelector(`.scroll-target-${clazz}`)
        target?.scrollIntoView({ behavior: 'smooth' })
        if (this.$route.query.go) {
          if (target) {
            // done
            this.$router.push({ path: '/' })
            retries = 0
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
