<template>
  <component :is="tag"
    class="2xl:mx-auto lg:mx-16 md:mx-8"
    :class="retractable ? 'w-full md:w-auto md:max-w-screen-2xl px-8 md:px-0' : 'max-w-screen-2xl mx-8'">
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
  computed: {
  }
})
</script>
