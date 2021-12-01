<template>
  <div class="min-h-screen flex flex-col">
    <LayoutLogo />
    <LayoutNavBar
      :retractable="false"
      :highlight-current-section="false"
      @scrollTo="scrollTo" />
    <main class="flex-1">
      <Nuxt />
    </main>
    <LayoutFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Breakpoints, breakpoints, IlInjection } from '@/types/declarations'

let ready: (_: null) => void
const breakpointsReady = new Promise(resolve => {
  ready = resolve
})

export default Vue.extend({
  provide(): IlInjection {
    return {
      '$il': {
        breakpoints: this.breakpoints,
        breakpointsReady
      }
    }
  },
  data: (): { breakpoints: Breakpoints } => ({
    breakpoints: {
      gtsm: false,
      gtmd: false,
      gtlg: false,
      gtxl: false,
      gt2xl: false
    },
  }),
  mounted() {
    this.$nextTick(() => this.updateBreakpoints())
    this.$nuxt.$on('scrollTo', this.scrollTo)
    window.addEventListener('resize', this.updateBreakpoints)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateBreakpoints)
  },
  methods: {
    updateBreakpoints() {
      Object.entries(breakpoints)
      .reduce((result, [breakpoint, value]) => {
        result[`gt${breakpoint}`] = window.innerWidth >= value
        return result
      }, this.breakpoints)
      ready(null)
    },
    scrollTo(clazz: string) {
      this.$router.push({ path: '/', query: { go: clazz } })
    }
  }
})
</script>
