<template>
  <div class="absolute top-0 bottom-0 right-0 left-0 from-black opacity-50"
    :class="{
      'bg-gradient-to-tr': direction === 'top-right',
      'bg-gradient-to-t': direction === 'top',
      'top-1/2': halfHeight,
      'top-0': !halfHeight
    }">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    direction: {
      type: String,
      default: 'top'
    },
    halfHeight: {
      type: Boolean,
      default: false
    }
  }
})
</script>
