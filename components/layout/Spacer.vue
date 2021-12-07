<template>
  <div
    class="w-full" :class="{
      'h-0': ms === 0,
      'h-4': ms === 1,
      'h-8': ms === 2,
      'h-12': ms === 3,
      'h-20': ms === 4,
      'h-24': ms === 5,
      'h-28': ms === 6,
      'md:h-12': ms === 2 && responsive,
      'xl:h-16': ms === 2 && responsive,
    }"></div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    ms: {
      type: Number,
      default: 2
    },
    responsive: {
      type: Boolean,
      default: true
    }
  }
})
</script>
