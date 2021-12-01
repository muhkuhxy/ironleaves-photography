<template>
  <div class="w-full pt-4 md:pb-4 z-50 bg-white">
    <a @click="goHome">
      <SvgLogo class="h-[15vh] mx-auto cursor-pointer"></SvgLogo>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    goHome() {
      this.$nuxt.$emit('scrollTo', 'passion')
    }
  }
})
</script>
