<template>
  <div class="overflow-hidden bg-emerald">
    <h2
      v-if="!breakpoints.gtlg"
      class="px-8 py-4 text-xl font-bold flex justify-between cursor-pointer"
      @click="open = !open">
      <slot name="title"></slot>
      <span
        class="lg:hidden transition-all transform duration-300 ease-linear"
        :class="[open ? '-rotate-90' : 'rotate-90']">&#10095;</span>
    </h2>
    <transition
      name="grow"
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave">
      <div
        v-show="open || breakpoints.gtlg"
        class="lg:flex lg:flex-col lg:gap-8">
        <img class="object-cover w-full" :src="imgSrc">
        <h2
          v-if="breakpoints.gtlg"
          class="px-4 xl:px-8 text-3xl font-bold text-center">
          <slot name="title"></slot>
        </h2>
        <div class="p-8 lg:pt-0 lg:pb-8 lg:px-4 xl:px-8 flex flex-col gap-6">
          <slot name="content"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VueConstructor } from 'vue/types/vue'
import { BreakpointsInjection } from '@/types/declarations'

export default (Vue as VueConstructor<Vue & BreakpointsInjection>).extend({
  inject: {
    breakpoints: 'breakpoints'
  } as Record<keyof BreakpointsInjection, string>,
  props: {
    imgSrc: {
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
