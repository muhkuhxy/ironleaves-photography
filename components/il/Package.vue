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
        <div class="p-8">
          <slot name="content"></slot>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, doloremque. Error et facere iusto deserunt nam, possimus deleniti aut asperiores dolores architecto harum, ratione doloribus libero magnam voluptas? Necessitatibus, voluptas?</p>
          <p class="mt-6">75 &euro; / Stunde</p>
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
