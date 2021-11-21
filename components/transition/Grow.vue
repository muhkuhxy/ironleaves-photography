<template>
  <transition
      name="grow"
      :css="false"
      :appear="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave">
      <slot></slot>
    </transition>
</template>

<script lang="ts">
import Vue from 'vue'

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
        // ease: 'power2.out',
        height,
        duration: this.duration,
        onComplete: () => {
          el.style.height = 'auto'
          done()
        }
      })
    },
    leave(el: HTMLElement, done: () => void) {
      gsap.to(el, {
        height: '0px',
        duration: this.duration,
        onComplete: done,
      })
    }
  },
})
</script>
