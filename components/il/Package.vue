<template>
  <div class="package overflow-hidden bg-emerald">
    <h2
      v-show="!gtMd"
      class="px-8 py-4 text-xl font-bold flex justify-between cursor-pointer"
      @click="$emit('change')">
      <slot name="title"></slot>
      <span
        class="lg:hidden transition-all duration-300 ease-linear"
        :class="[open ? '-rotate-90 -translate-x-1' : 'rotate-90']">&#10095;</span>
    </h2>
    <TransitionGrow>
      <div
        v-show="gtMd || open"
        class="flex flex-col gap-8 pb-8">
        <picture>
          <source media="(max-width: 767px)" :srcset="imgSrc.mobile">
          <source media="(min-width: 768px)" :srcset="imgSrc.desktop">
          <img class="object-cover w-full" :src="imgSrc.desktop">
        </picture>
        <h2
          v-show="gtMd"
          class="px-8 text-3xl font-bold text-center">
          <slot name="title"></slot>
        </h2>
        <div class="px-8 flex flex-col gap-6">
          <slot name="content"></slot>
        </div>
      </div>
    </TransitionGrow>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VueConstructor } from 'vue/types/vue'
import { IlInjection } from '@/types/declarations'

export default (Vue as VueConstructor<Vue & IlInjection>).extend({
  inject: {
    $il: '$il'
  } as Record<keyof IlInjection, string>,
  props: {
    imgSrc: {
      type: Object,
      required: true
    },
    open: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    gtMd(): boolean {
      return this.$il.breakpoints.gtmd
    }
  }
})
</script>
