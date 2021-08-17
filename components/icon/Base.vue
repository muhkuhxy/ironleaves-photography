<template>
  <svg xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title
      :id="iconName"
      lang="en"
    >{{ iconName }} icon</title>
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    iconName: {
      type: String,
      default: 'box'
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    }
  }
})
</script>

<style scoped>
svg {
  vertical-align: middle;
  display: inline;
}
</style>
