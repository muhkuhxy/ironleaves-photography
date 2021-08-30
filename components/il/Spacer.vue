<template>
  <div :class="`mt-${m*4}`"></div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    m: {
      type: Number,
      default: 2
    }
  }
})
</script>
