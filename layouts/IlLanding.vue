<template>
  <div class="min-h-screen flex flex-col">
    <IlLogo />
    <IlNavBar
      key="landing-navbar"
      :retractable="true"
      :highlight-current-section="true"
      @scrollTo="scrollTo" />
    <main class="flex-1">
      <Nuxt @scrollTo="scrollTo" />
    </main>
    <IlFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Breakpoints, breakpoints, IlInjection } from '@/types/declarations'

let retries = 0

export default Vue.extend({
  provide(): IlInjection {
    return {
      '$il': {
        breakpoints: this.breakpoints
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
    if (typeof this.$route.query.go === 'string') {
      this.scrollTo(this.$route.query.go)
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
    },
    scrollTo(clazz: string, offset: number | null = null) {
      const target = document.querySelector(`.scroll-target[data-section=${clazz}]`)
      const newOffset = target?.getBoundingClientRect()?.y
      if (this.$route.query.go) {
        if (target && offset === newOffset) {
          // done
          target.scrollIntoView({ behavior: 'smooth' })
          this.$router.push({ path: '/' })
          retries = 0
        } else if (retries < 10) {
          window.setTimeout(() => this.scrollTo(clazz, newOffset), 300)
          retries++
        }
      } else {
        target?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
})
</script>
