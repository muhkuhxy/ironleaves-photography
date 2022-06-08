<template>
  <component
    :is="tag"
    class="xl:mx-auto xl:px-16 px-8 md:px-16"
    :class="retractable ? 'w-full md:w-auto md:max-w-screen-2xl' : 'max-w-screen-2xl'">
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    retractable: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
})
</script>
