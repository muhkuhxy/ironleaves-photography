<template>
  <div
    class="absolute top-0 bottom-0 right-0 left-0 from-black"
    :class="{
      'bg-gradient-to-tr': direction === 'top-right',
      'bg-gradient-to-br': direction === 'bottom-right',
      'bg-gradient-to-t': direction === 'top',
      'top-1/2': halfHeight,
      'top-0': !halfHeight,
      'opacity-25': halfOpacity,
      'opacity-50': !halfOpacity,
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
    },
    halfOpacity: {
      type: Boolean,
      default: false
    }
  }
})
</script>
