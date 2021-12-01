<template>
  <div
    :class="[side === 'left' ? 'left-0' : 'right-0']"
    class="absolute mb-8 bottom-0 top-0 flex items-end z-20">
    <IlGradient :direction="side === 'left' ? 'right' : 'left'" />
    <a
      :class="[side === 'left' ? 'ml-4 md:ml-8 mr-4' : 'mr-4 md:mr-8 ml-4']"
      class="cursor-pointer mb-2 text-white"
      @click="$emit('click', $event)">
      <IconBase
        :class="[side === 'left' ? 'rotate-90' : '-rotate-90']"
        class="text-white w-10 lg:w-16">
        <IconArrow />
      </IconBase>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    side: {
      type: String,
      required: true
    }
  }
})
</script>
