<template>
  <div>
    <h2 class="px-8 py-4 text-xl font-bold flex justify-between cursor-pointer"
      @click="active = !active">
      {{ title }}
      <span class="md:hidden transition-all transform duration-300 ease-linear"
        :class="[active ? '-rotate-90' : 'rotate-90']">&#10095;</span>
    </h2>
    <transition name="grow">
      <div v-if="active">
        <slot name="img"></slot>
        <div class="p-8 flex flex-col gap-6">
          <slot name="content"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data: () => ({
    active: false
  })
})
</script>

<style lang="postcss" scoped>
.grow-enter-active, .grow-leave-active {
  transition: all .3s ease-in-out;
}
.grow-enter, .grow-leave-to {
  transform: scaleY(0);
}
.grow-enter-to {
  transform: scaleY(1);
}
</style>
