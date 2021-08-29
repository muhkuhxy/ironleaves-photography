<template>
  <div class="swiper relative" :class="`swiper-${id}`">
    <div class="swiper-wrapper">
      <div v-for="(url) in slides"
        :key="url"
        class="swiper-slide flex items-center">
        <img class="object-contain h-full"
          :src="require(`~/assets/images/${url}`)">
      </div>
    </div>
    <a class="arrow cursor-pointer absolute left-0 ml-6 z-20"
      @click="swiper.slidePrev()">
      <IconBase class="text-white transform rotate-90 w-16">
        <IconArrow />
      </IconBase>
    </a>
    <a class="arrow cursor-pointer absolute right-0 mr-6 z-20"
      @click="swiper.slideNext()">
      <IconBase class="text-white transform -rotate-90 w-16">
        <IconArrow />
      </IconBase>
    </a>
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
      centeredSlides: true
    })
  }
})
</script>

<style scoped lang="postcss">
.swiper {
  &-slide {
    width: auto;
  }
  .arrow {
    --width: 2rem;

    top: calc(50% - var(--width));
    svg {
      width: var(--width);
    }
  }
}
</style>
