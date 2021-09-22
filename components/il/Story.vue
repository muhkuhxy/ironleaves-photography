<template>
  <div class="bg-dust text-bluegray pb-6">
    <SectionContent>
      <slot name="image"></slot>
      <IlSpacer />
      <SectionHeader class="text-center mb-6">
        <slot name="title"></slot>
      </SectionHeader>
      <slot name="content"></slot>
      <IlSpacer :ms="1" />
    </SectionContent>
    <IlSlider class="bg-dust pb-8 h-50vh"
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
