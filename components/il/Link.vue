<template>
  <span class="cursor-pointer underline" @click="click">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    target: {
      type: String,
      default: '',
    }
  },
  methods: {
    click() {
      if (this.target) {
        this.$nuxt.$emit('scrollTo', this.target)
      } else {
        this.$emit('click')
      }
    },
  },
})
</script>
