<template>
  <SectionContent class="mt-[50vh]">
    <div
      data-animation="carousel"
      class="relative h-[50vh] [perspective:3000px] [transform-style:preserve-3d]">
      <!-- @mouseenter="() => timeline.pause()"
      @mouseleave="() => timeline.play()"> -->
      <!-- <div class="w-16 absolute inset-0 bg-gradient-to-r from-white z-10"></div> -->
      <div
          v-for="(img,index) in document.imgs"
          :key="index"
          data-animation="box"
          class="absolute inset-0 inline-block [perspective:0] [transform-style:preserve-3d] origin-[50%_50%_-400px] w-[50%] lg:w-[33%] h-full m-auto">
          <div class="h-full origin-center">
            <img
              class="w-full h-full object-cover aspect-square"
              :src="require(`/assets/images/${img}`)">
          </div>
      </div>
      <!-- <div class="w-16 absolute inset-y-0 right-0 bg-gradient-to-l from-white"></div> -->
    </div>
  </SectionContent>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'

class Data {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public animationInitialized: boolean = false,
    public timeline: gsap.core.Timeline | null = null
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
  async mounted() {
    await this.breakpointsReady()
    this.initAnimations()
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
      // horizontalLoop(this.$el.querySelector('.carousel')!,
      //   this.$el.querySelectorAll('.card'), {
      //     repeat: -1,
      //     speed: .4,
      //     minScale: 0.6,
      //     // paused: true
      //   })
      this.timeline = this.$anim.carousel3d('[data-animation=carousel]', this.$el.querySelectorAll('[data-animation=box]'), {
        // paused: true,
        duration: 20
      })
    }
  }
})
</script>
