<template>
  <li class="cursor-pointer" @click="$emit('scrollTo', target)">{{ title }}</li>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    target: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
})
</script>
