<template>
  <div class="bg-dust text-bluegray pb-6">
    <SectionContent class="lg:flex items-center lg:gap-8">
      <slot name="image"></slot>
      <IlSpacer class="md:mt-4 xl:mt-8 lg:hidden" />
      <div class="lg:w-1/2 flex-initial">
        <SectionHeader class="text-center">
          <slot name="title"></slot>
        </SectionHeader>
        <IlSpacer class="md:mt-4 xl:mt-8" />
        <slot name="content"></slot>
        <IlSpacer :ms="1" />
      </div>
    </SectionContent>
    <IlSlider
      class="bg-dust pb-8 h-50vh"
      :slides="slides" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    slides: {
      type: Array,
      required: true
    }
  }
})
</script>
