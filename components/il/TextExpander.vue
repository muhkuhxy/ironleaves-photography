<template>
  <div class="flex flex-col gap-4">
    <TransitionGrow>
      <div
        v-show="showMore || gtSm"
        class="max-w-prose overflow-y-hidden flex flex-col gap-4">
        <slot></slot>
      </div>
    </TransitionGrow>
    <button
      class="underline sm:hidden"
      :class="btnClass"
      @click="showMore = !showMore">
      <transition name="fade" mode="out-in">
        <span v-if="showMore" key="less">Weniger</span>
        <span v-else key="more">Weiterlesen</span>
      </transition>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  props: {
    btnClass: {
      type: String,
      default: ''
    },
  },
  data: () => ({
    showMore: false,
  }),
  computed: {
    ...mapGetters('breakpoints', ['breakpoints']),
    gtSm(): boolean {
      return this.breakpoints.gtsm
    },
  },
})
</script>

<style lang="postcss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: all .3s ease-in-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
