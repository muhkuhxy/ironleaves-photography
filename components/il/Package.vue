<template>
  <div class="overflow-hidden bg-emerald">
    <h2
      v-show="!gtLg"
      class="px-8 py-4 text-xl font-bold flex justify-between cursor-pointer"
      @click="$emit('change')">
      <slot name="title"></slot>
      <span
        class="lg:hidden transition-all transform duration-300 ease-linear"
        :class="[open ? '-rotate-90' : 'rotate-90']">&#10095;</span>
    </h2>
    <TransitionGrow>
      <div
        v-show="gtLg || open"
        class="lg:flex lg:flex-col lg:gap-8">
        <img class="object-cover w-full" :src="imgSrc">
        <h2
          v-show="gtLg"
          class="px-4 xl:px-8 text-3xl font-bold text-center">
          <slot name="title"></slot>
        </h2>
        <div class="p-8 lg:pt-0 lg:pb-8 lg:px-4 xl:px-8 flex flex-col gap-6">
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
      type: String,
      required: true
    },
    open: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    gtLg(): boolean {
      return this.$il.breakpoints.gtlg
    }
  }
})
</script>
