<template>
  <div
    class="transition-all duration-300 ease-linear h-[.5em] w-[.5em] [border-top-width:var(--shadow-size)] [border-right-width:var(--shadow-size)] border-current origin-[75%_25%] translate-y-[25%] translate-x-[-25%]"
    :class="[open ? 'rotate-[-45deg]' : 'rotate-[135deg]', shadowClass]"></div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    open: {
      type: Boolean,
      required: true
    },
    small: {
      type: String,
      default: '.75rem'
    },
    shadowClass: {
      type: String,
      default: '[--shadow-size:4px]'
    }
  }
})
</script>
