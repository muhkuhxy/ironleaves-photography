<template>
  <div>
    <!-- scroll-target + data-section have to be inside the component,
    nuxt strips them for some reason -->
    <Passion />
    <AboutMe class="scroll-target" data-section="about-me" />
    <Candor class="scroll-target" data-section="candor" />
    <LayoutSpacer :responsive="false" :ms="4" />
    <Looks class="scroll-target" data-section="looks" />
    <Stories class="scroll-target" data-section="stories" />
    <Papeterie class="scroll-target" data-section="papeterie" />
    <Packages class="scroll-target" data-section="packages" />
    <Contact class="scroll-target" data-section="contact" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ScrollTrigger } from '@/lib/gsap'

export default Vue.extend({
  // @ts-ignore
  layout: 'landing',
  mounted() {
    this.$nuxt.$on('grow', () => {
      this.$nextTick(ScrollTrigger.refresh)
    })
  },
})
</script>
