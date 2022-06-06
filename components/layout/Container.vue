<template>
  <component
    :is="tag"
    :class="classes">
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    retractable: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'div'
    },
    fluid: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      const classes = ['xl:mx-auto xl:px-16 px-8 md:px-16']
      // fluid has no max-width
      if (this.fluid) {
        return classes
      }
      if (this.retractable) {
        classes.push('w-full md:w-auto md:max-w-screen-xl' )
      } else {
        classes.push('max-w-screen-xl')
      }
      return classes
    }
  }
})
</script>
