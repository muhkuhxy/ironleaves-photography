<template>
  <div class="carousel relative">
    <div class="carousel__track overflow-hidden flex flex-row flex-nowrap gap-px">
      <img v-for="(url, index) in slides"
        :key="url"
        class="carousel__slide"
        :class="{ current: index === slideIndex}"
        :src="require(`~/assets/images/${url}`)"
        draggable="false">
    </div>
    <a class="arrow cursor-pointer absolute right-0 mr-4" @click="move()">
      <IconBase class="text-white transform -rotate-90 w-16">
        <IconArrow />
      </IconBase>
    </a>
    <a class="arrow cursor-pointer absolute left-0 ml-4" @click="move(-1)">
      <IconBase class="text-white transform rotate-90 w-16">
        <IconArrow />
      </IconBase>
    </a>
  </div>
</template>

<script lang="ts">
// TODO: support swiping
import Vue from 'vue'
export default Vue.extend({
  props: {
    slides: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    slideIndex: 0,
    viewport: {
      width: 0
    }
  }),
  beforeMount() {
    window.addEventListener('resize', this.updateWidthAndScroll)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateWidthAndScroll)
  },
  mounted() {
    this.updateWidth()
    const slides = Array.from(this.$el.querySelectorAll('.carousel__slide'))
    const center = (this.viewport.width) / 2
    const startingIndex = slides.findIndex(s => s.getBoundingClientRect().left > center)
    if (startingIndex > 0) {
      this.slideIndex = startingIndex
      this.scroll()
    }
  },
  methods: {
    move(offset = 1) {
      this.slideIndex = (this.slideIndex + offset + this.slides.length) % this.slides.length
      this.scroll()
    },
    scroll() {
      const track = this.$el.querySelector('.carousel__track')
      if (track) {
        const slides = track.querySelectorAll('.carousel__slide') || []
        const slide = slides[this.slideIndex]
        const { left, width } = slide?.getBoundingClientRect() || {}
        const imageCenterOffset = (this.viewport.width - width) / 2
        const scrollOffset = (track.scrollLeft + left) - imageCenterOffset

        // console.log({scrollOffset})
        // this.$refs.carousel_track?.style.transform = `translateX(-${scrollOffset}px)`
        track.scrollTo({
          top: 0,
          left: scrollOffset,
          behavior: 'smooth'
        })
      }
    },
    updateWidth() {
      this.viewport = this.$el.getBoundingClientRect();
    },
    updateWidthAndScroll() {
      this.updateWidth()
      this.scroll()
    }
  }
})
</script>

<style scoped lang="postcss">
.carousel {
  &__track {
    height: 100%;
    scroll-behavior: smooth;
  }
  .current {
    border: 1px solid blueviolet;
  }
  img {
    object-fit: cover;
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
