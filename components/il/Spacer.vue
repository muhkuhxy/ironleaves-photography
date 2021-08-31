<template>
  <div :class="`h-${ms*4} w-full`"></div>
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
