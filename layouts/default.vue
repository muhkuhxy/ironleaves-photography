<template>
  <div class="min-h-screen flex flex-col">
    <LayoutLogo />
    <LayoutNavBar
      :retractable="false"
      :highlight-current-section="false" />
    <main class="flex-1">
      <Nuxt />
    </main>
    <LayoutFooter />
    <ButtonArrow
      class="fixed bottom-[1rem] right-[1rem] bg-white opacity-90 w-10 md:w-12 h-10 md:h-12 p-[0.35rem] shadow-lg border border-sunset border-opacity-50 z-50"
      title="Back to top"
      @click="scrollToTop" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Breakpoints, breakpoints, IlInjection } from '@/types/declarations'
import { loadCurator } from '@/lib/curator'
import { scrollToTop } from '~/lib/functions'

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
    window.addEventListener('resize', this.updateBreakpoints)
    loadCurator()
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
    scrollToTop,
  }
})
</script>
