<template>
  <div class="bg-dust text-bluegray pb-6">
    <SectionContent class="flex flex-col lg:flex-row items-center gap-8">
      <slot name="image"></slot>
      <div class="lg:w-1/2 flex-initial text-center lg:text-left flex flex-col gap-4 max-w-prose mx-auto lg:mx-0">
        <h2 class="font-bold">
          <slot name="title"></slot>
        </h2>
        <slot name="content"></slot>
        <IlTextExpander v-if="$slots.moreContent">
          <slot name="moreContent"></slot>
        </IlTextExpander>
        <IlSpacer :ms="1" />
      </div>
    </SectionContent>
    <IlSlider
      class="bg-dust pb-8 h-[50vh]"
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
