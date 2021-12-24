<template>
  <div class="min-h-screen flex flex-col">
    <LayoutLogo />
    <LayoutNavBar
      :retractable="true"
      :highlight-current-section="true" />
    <main class="flex-1">
      <Nuxt />
    </main>
    <LayoutFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Breakpoints, breakpoints, IlInjection } from '@/types/declarations'
import { loadCurator } from '@/lib/curator'
import { retry } from '~/lib/functions'

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
  scrollToTop: false,
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
    if (this.$route.hash) {
      this.initialScroll()
    } else {
      window.scrollTo(0, 0)
    }
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
    initialScroll() {
      let offset: number | undefined
      retry('landing: initial scroll', 10, 250, () => {
        const target = document.querySelector(this.$route.hash)
        const newOffset = target?.getBoundingClientRect()?.y
        if (target && offset === newOffset) {
          target.scrollIntoView()
          return true
        }
        offset = newOffset
        return false
      })
    }
  }
})
</script>
