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

declare global {
  // eslint-disable-next-line no-var
  var gsap: any
}

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
      if (gsap) {
        gsap.to(el, {
          height,
          duration: this.duration,
          onComplete: () => {
            el.style.height = 'auto'
            done()
          }
        })
      } else {
        el.style.height = 'auto'
      }
    },
    leave(el: HTMLElement, done: () => void) {
      if (gsap) {
        gsap.to(el, {
          height: '0px',
          duration: this.duration,
          onComplete: done,
        })
      } else {
        el.style.height = '0'
      }
    }
  },
})
</script>
