<template>
  <div
    v-if="animationInitialized"
    class="hero-flower animated" :class="animatedClasses"></div>
  <SvgHeroFlower v-else class="hero-flower" :class="staticClasses" />
</template>

<script lang="ts">
import Vue from 'vue'
import { retry } from '~/lib/functions'
import { animateHeroFlower } from '~/lib/lottie'
import { ScrollTrigger } from '~/lib/gsap'

export default Vue.extend({
  props: {
    staticClasses: {
      type: String,
      required: true,
    },
    animatedClasses: {
      type: String,
      required: true
    },
  },
  data: () => ({
    animationInitialized: false,
  }),
  mounted() {
    this.initAnimations()
  },
  updated() {
    if (!this.animationInitialized) {
      this.initAnimations()
    }
  },
  methods: {
    initAnimations() {
      if (!this.$el.tagName) {
        return
      }
      this.animationInitialized = true
      setTimeout(() => retry('animateHeroFlower', 8, 250, this.animate), 0)
    },
    animate() {
      const replaced = this.$el.classList.contains('animated')
      if (!replaced) return false
      animateHeroFlower(this.$el).setSpeed(0.7)
      ScrollTrigger.refresh()
      return true
    }
  },
})
</script>

<style lang="postcss" scoped>
.hero-flower {
  shape-outside: polygon(112.95% 2.53%, -6.32% -21.73%, 28.48% 35.00%, 21.59% 65.9%, 87.94% 101.47%);
}
</style>
