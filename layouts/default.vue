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
      @click="() => scrollToTop(true)" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'
import { loadCurator } from '@/lib/curator'
import { scrollToTop } from '@/lib/functions'

export default Vue.extend({
  mounted() {
    this.$nextTick(this.updateBreakpoints)
    window.addEventListener('resize', this.updateBreakpoints)
    loadCurator()
    document.documentElement.classList.add('scroll-smooth')
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateBreakpoints)
  },
  methods: {
    ...mapMutations('breakpoints', ['updateBreakpoints']),
    scrollToTop,
  },
})
</script>
