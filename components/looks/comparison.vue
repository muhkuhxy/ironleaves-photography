<template>
  <SectionContent class="mt-[50vh]">
    <div
      data-animation="carousel"
      class="relative h-[50vh] lg:h-[85vh] [perspective:3000px] [transform-style:preserve-3d]"
      @mouseenter="() => timeline && timeline.pause()"
      @mouseleave="() => timeline && timeline.play()">
      <div
          v-for="(img,index) in document.imgs"
          :key="index"
          data-animation="box"
          class="absolute inset-0 inline-block [perspective:0] [transform-style:preserve-3d] md:scale-100 md:z-auto w-[50%] md:w-[55%] md:translate-x-0 h-full m-auto"
          :class="{
            'z-20': index === 2,
            'scale-75 z-10': index === 1 || index === 3,
            'translate-x-[-40%]': index === 1,
            'translate-x-[40%]': index === 3,
            'scale-50': index === 0 || index === 4,
            'translate-x-[-75%]': index === 0,
            'translate-x-[75%]': index === 4,
          }"
          >
          <div class="h-full origin-center">
            <img
              class="w-full h-full object-cover aspect-[1/3]"
              :src="require(`/assets/images/${img}`)">
          </div>
      </div>
    </div>
  </SectionContent>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
import { Carousel3dTimeline } from '@/plugins/animations.client'

class Data {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public animationInitialized: boolean = false,
    public timeline: Carousel3dTimeline | null = null
  ) {}
}

export default Vue.extend({
  props: {
    document: {
      type: Object,
      required: true
    }
  },
  data: () => new Data(),
  computed: mapGetters('breakpoints', ['breakpoints']),
  async mounted() {
    await this.breakpointsReady()
    this.initAnimations()
    window.addEventListener('resize', this.initAnimations)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.initAnimations)
  },
  updated() {
    if (!this.animationInitialized) {
      this.initAnimations()
    }
  },
  methods: {
    ...mapActions('breakpoints', ['breakpointsReady']),
    initAnimations() {
      if (!this.$el.tagName) {
        return
      }
      if (!this.breakpoints.gtmd) {
        if (this.timeline) {
          this.timeline.kill()
          this.timeline = null
          this.$el.querySelectorAll('[data-animation=box]').forEach(box => {
            (box as HTMLElement).style.transform = '';
            ((box as HTMLElement).children[0] as HTMLElement).style.transform = ''
          })
        }
        return
      }
      // console.log('init animation', window.innerWidth)
      const progress = this.timeline?.progress()
      this.timeline?.kill()
      this.timeline = this.$anim.carousel3d(this.$el.querySelector('[data-animation=carousel]') as HTMLElement, this.$el.querySelectorAll('[data-animation=box]'), {
        // paused: true,
        duration: 20,
        progress,
      })
    }
  }
})
</script>
