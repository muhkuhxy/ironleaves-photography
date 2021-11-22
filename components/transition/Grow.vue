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
import { mapState } from 'vuex'

export default Vue.extend({
  props: {
    duration: {
      type: Number,
      default: 0.75
    },
  },
  computed: mapState(['animationReady', 'gsap']),
  methods: {
    beforeEnter(el: HTMLElement) {
      el.style.height = '0'
    },
    enter(el: HTMLElement, done: () => void) {
      const height = el.scrollHeight
      if (this.animationReady) {
        this.gsap.to(el, {
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
      if (this.animationReady) {
        this.gsap.to(el, {
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
