<template>
  <div class="swiper relative overflow-x-hidden w-full" :class="`swiper-${id}`">
    <div class="swiper-wrapper">
      <div
        v-for="(url) in slides"
        :key="url"
        class="swiper-slide flex items-center max-w-[90%]">
        <img
          class="object-cover h-full"
          :src="require(`~/assets/images/${url}`)">
      </div>
    </div>
    <IlSliderNavigation side="left" @click="swiper.slidePrev()" />
    <IlSliderNavigation side="right" @click="swiper.slideNext()" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Swiper } from 'swiper'
import 'swiper/swiper-bundle.min.css'

let id = 0

export default Vue.extend({
  props: {
    slides: {
      type: Array,
      required: true
    }
  },
  data: (): { swiper: null | Swiper, id: number } => {
    return {
      swiper: null,
      id: id++
    }
  },
  mounted() {
    this.swiper = new Swiper(`.swiper-${this.id}`, {
      loop: true,
      spaceBetween: 2,
      slidesPerView: 'auto',
      loopedSlides: this.slides.length,
      centeredSlides: true,
      slideToClickedSlide: true
    })
    setTimeout(this.fixSlider, 250)
  },
  beforeDestroy() {
    // console.log('slider: destroyed')
    // this.swiper?.destroy()
  },
  methods: {
    fixSlider() {
      const sliderBroken = this.$el.querySelector('.swiper-slide-active:last-child') != null
      if (sliderBroken) {
        console.info('fixing slider')
        this.swiper?.slideNext(1, false)
        setTimeout(this.fixSlider, 250)
      }
    }
  }
})
</script>

<style scoped lang="postcss">
.swiper-slide {
  /* override default swiper style */

  width: auto;
}
</style>
