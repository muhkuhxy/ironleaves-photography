<template>
  <div class="w-full" :class="{
      'h-0': ms === 0,
      'h-4': ms === 1,
      'h-8': ms === 2,
      'h-12': ms === 3,
      'h-16': ms === 4,
    }"></div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    ms: {
      type: Number,
      default: 2
    }
  }
})
</script>
