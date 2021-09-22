<template>
  <div class="overflow-hidden">
    <h2 class="px-8 py-4 text-xl font-bold flex justify-between cursor-pointer"
      @click="open = !open">
      {{ title }}
      <span class="md:hidden transition-all transform duration-300 ease-linear"
        :class="[open ? '-rotate-90' : 'rotate-90']">&#10095;</span>
    </h2>
    <transition name="grow"
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave">
      <div v-show="open">
        <slot name="img"></slot>
        <div class="p-8 flex flex-col gap-6">
          <slot name="content"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data: () => ({
    open: false,
  }),
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
      })
    },
    leave(el: HTMLElement, done: () => void) {
      this.$velocity(el, { height: '0px' }, {
        complete: done,
      })
    }
  }
})
</script>
