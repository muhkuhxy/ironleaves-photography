<template>
  <li
    role="link"
    class="text-sunset uppercase cursor-pointer"
    :class="{ 'underline font-bold': query === tag }"
    @click="$emit('click', tag === query ? '' : tag)">
    {{ label }}
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    tag: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    query: {
      type: String,
      required: true
    },
  }
})
</script>
