<template>
  <!-- appear MUST be true, otherwise TextExpander breaks -->
  <transition
      name="grow"
      :css="false"
      :appear="true"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave">
      <slot></slot>
    </transition>
</template>

<script lang="ts">
import Vue from 'vue'
import { gsap } from '@/lib/gsap'

export default Vue.extend({
  props: {
    duration: {
      type: Number,
      default: 0.75
    },
  },
  methods: {
    beforeEnter(el: HTMLElement) {
      el.style.height = '0'
    },
    enter(el: HTMLElement, done: () => void) {
      const height = el.scrollHeight
      gsap.to(el, {
        height,
        duration: this.duration,
        onComplete: () => {
          el.style.height = 'auto'
          this.$nuxt.$emit('grow', { expanded: true })
          done()
        }
      })
    },
    leave(el: HTMLElement, done: () => void) {
      gsap.to(el, {
        height: '0px',
        duration: this.duration,
        onComplete: () => {
          done()
          this.$nuxt.$emit('grow', { expanded: false })
        },
      })
    }
  }
})
</script>
