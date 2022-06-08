<template>
  <LayoutContainer
    class="py-12 lg:py-16 xl:py-20"
    :class="fluffy && '2xl:py-[min(15vh,10rem)]'">
    <slot/>
  </LayoutContainer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    fluffy: {
      type: Boolean,
      default: false
    }
  }
})
</script>
