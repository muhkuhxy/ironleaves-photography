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
        <LayoutSpacer :responsive="false" :ms="1" />
      </div>
    </SectionContent>
    <div class="h-[50vh]">
      <LazyIlSlider
        v-if="trigger"
        class="bg-dust pb-8 h-full"
        :slides="slides" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ScrollTrigger } from '@/lib/gsap'

export default Vue.extend({
  props: {
    slides: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    scrollTrigger: null as null | ScrollTrigger,
    trigger: false
  }),
  mounted() {
    this.initScrollTrigger()
  },
  beforeDestroy() {
    this.scrollTrigger?.kill();
  },
  methods: {
    initScrollTrigger() {
      this.scrollTrigger = ScrollTrigger.create({
        trigger: this.$el,
        start: () => 'top-=50% bottom',
        end: () =>'bottom+=50% top',
        onToggle: (self: any) => {
          this.trigger = true
          self.kill()
          this.scrollTrigger = null
        }
      })
    },
  }
})
</script>
