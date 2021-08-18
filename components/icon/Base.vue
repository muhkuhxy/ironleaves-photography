<template>
  <svg xmlns="http://www.w3.org/2000/svg"
    class="inline align-middle"
    viewBox="0 0 512 512"
    :aria-labelledby="iconName"
    role="presentation">
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

