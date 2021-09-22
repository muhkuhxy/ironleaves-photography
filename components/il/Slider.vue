<template>
  <div class="swiper relative overflow-x-hidden w-full" :class="`swiper-${id}`">
    <div class="swiper-wrapper">
      <div v-for="(url) in slides"
        :key="url"
        class="swiper-slide flex items-center max-w-9/10">
        <img class="object-cover h-full"
          :src="require(`~/assets/images/${url}`)">
      </div>
    </div>
    <a :class="baseStyles.link" class="left-0 translate-x-8"
      @click="swiper.slidePrev()">
      <IconBase :class="baseStyles.icon" class="rotate-90">
        <IconArrow />
      </IconBase>
    </a>
    <a :class="baseStyles.link" class="right-0 -translate-x-8"
      @click="swiper.slideNext()">
      <IconBase :class="baseStyles.icon" class="-rotate-90">
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
  computed: {
    baseStyles: () => ({
      link: 'cursor-pointer absolute bottom-0 transform -translate-y-10 z-20',
      icon: 'text-white transform w-10'
    })
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
  }
})
</script>

<style scoped lang="postcss">
.swiper {
  &-slide {
    /* override default swiper style */

    width: auto;
  }
}
</style>
