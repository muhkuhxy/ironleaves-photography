<template>
  <LayoutContainer
    class="py-12 lg:py-16 xl:py-20"
    :fluid="fluid">
    <slot/>
  </LayoutContainer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    fluid: {
      type: Boolean,
      default: false
    }
  }
})
</script>
