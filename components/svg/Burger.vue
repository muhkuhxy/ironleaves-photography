<template>
  <svg viewBox="0 0 100 80" :class="{open: open}">
    <rect class="upper" width="100" height="10" rx="8"></rect>
    <rect class="middle" y="30" width="100" height="10" rx="8"></rect>
    <rect class="lower" y="60" width="100" height="10" rx="8"></rect>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    open: {
      type: Boolean,
      required: true
    }
  }
})
</script>

<style lang="postcss" scoped>
rect {
transition: all .3s linear;
}

.open {
  .upper {
    transform: rotate(45deg) translate(10px, -10px);
  }

  .middle {
    opacity: 0;
  }

  .lower {
    transform: translate(-35px, 30px) rotate(-45deg);
  }
}
</style>
