<template>
  <div
    class="absolute inset-0 overflow-hidden"
    :class="{
      hidden: hidden
    }">
    <div class="relative max-w-screen-xl mx-auto h-full">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    hidden: {
      type: Boolean,
      default: true
    }
  }
})
</script>
