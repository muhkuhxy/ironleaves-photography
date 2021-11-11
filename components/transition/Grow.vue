<template>
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
export default Vue.extend({
  props: {
    duration: {
      type: Number,
      default: 500
    },
  },
  methods: {
    beforeEnter(el: HTMLElement) {
      el.style.height = '0'
    },
    enter(el: HTMLElement, done: () => void) {
      const height = el.scrollHeight
      this.$velocity(el, { height: `${height}px` }, {
        complete: () => {
          el.style.height = 'auto'
          done()
        },
        duration: this.duration,
      })
    },
    leave(el: HTMLElement, done: () => void) {
      this.$velocity(el, { height: '0px' }, {
        complete: done,
        duration: this.duration,
      })
    }
  },
})
</script>
