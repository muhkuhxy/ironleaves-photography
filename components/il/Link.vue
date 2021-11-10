<template>
  <span class="cursor-pointer underline" @click="scroll">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    target: {
      type: String,
      required: true,
    }
  },
  methods: {
    scroll() {
      this.$nuxt.$emit('scrollTo', this.target)
    },
  },
})
</script>
