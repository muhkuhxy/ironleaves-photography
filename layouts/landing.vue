<template>
  <div class="min-h-screen flex flex-col">
    <LayoutLogo />
    <LayoutNavBar
      :retractable="breakpoints.gtlg"
      :highlight-current-section="true" />
    <main class="flex-1">
      <Nuxt />
    </main>
    <LayoutFooter />
    <ButtonArrow
      class="fixed bottom-[1rem] right-[1rem] bg-white opacity-90 w-10 md:w-12 h-10 md:h-12 p-[0.35rem] shadow-lg border border-sunset border-opacity-50 z-50"
      title="Back to top"
      @click="() => scrollToTop(true)" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapMutations } from 'vuex'
import { loadCurator } from '@/lib/curator'
import { retry, scrollToTop } from '@/lib/functions'

export default Vue.extend({
  computed: mapGetters('breakpoints', ['breakpoints']),
  mounted() {
    this.$nextTick(this.updateBreakpoints)
    window.addEventListener('resize', this.updateBreakpoints)
    loadCurator()
    if (this.$route.hash) {
      this.initialScroll(this.$route.hash)
    } else {
      window.scrollTo(0, 0)
    }
    document.documentElement.classList.add('scroll-smooth')
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateBreakpoints)
  },
  methods: {
    ...mapMutations('breakpoints', ['updateBreakpoints']),
    initialScroll(selector: string) {
      // console.log('scrolling to ' + selector)
      let offset: number | undefined
      retry('landing: initial scroll', 10, 250, () => {
        const target = document.querySelector(selector)
        const newOffset = target?.getBoundingClientRect()?.y
        if (target && offset === newOffset) {
          target.scrollIntoView()
          return true
        }
        offset = newOffset
        return false
      })
    },
    scrollToTop
  }
})
</script>
