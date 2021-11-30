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
import { gsapPromise } from '@/lib/gsap'

let gsap: any = null;

export default Vue.extend({
  props: {
    duration: {
      type: Number,
      default: 0.75
    },
  },
  mounted() {
    gsapPromise.then(({gsap: realGsap}) => {
      gsap = realGsap
    })
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
            this.$nuxt.$emit('grow', { expanded: true })
            done()
          }
        })
      } else {
        el.style.height = 'auto'
        this.$nuxt.$emit('grow', { expanded: true })
      }
    },
    leave(el: HTMLElement, done: () => void) {
      if (gsap) {
        gsap.to(el, {
          height: '0px',
          duration: this.duration,
          onComplete: () => {
            done()
            this.$nuxt.$emit('grow', { expanded: false })
          },
        })
      } else {
        el.style.height = '0'
        this.$nuxt.$emit('grow', { expanded: false })
      }
    }
  }
})
</script>
