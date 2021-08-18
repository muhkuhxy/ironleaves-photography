<template>
  <SectionParent class="">
    <SectionHeader class="my-8 text-center">
      <template #roofline>Stories</template>
      <span class="text-bluegray">Echte Emotionen</span>
    </SectionHeader>
    <SectionContent class="bg-dust text-bluegray">
      <img class="w-5/6 border-8 border-solid border-white filter drop-shadow"
        src="~/assets/images/Sandra-und-Jonas-Hochzeit-Reportage-1.jpg"
        alt="Happy couple">
      <Spacer class="mb-8"/>
      <SectionHeader class="text-center mb-6">
        Valerie&nbsp;&amp; Max
      </SectionHeader>
      <p class="max-w-prose">
        Das Pärchen, das mir wohl das größte Vertrauen
        entgegen gebracht und mich komplett bei ihrer
        aufregenden Reise bis zur Hochzeit
        mitgenommen hat. Neben der kompletten
        Papeterie durfte ich auch hautnah bei den
        Planungen mit dabei sein.
      </p>
    </SectionContent>
    <div class="carousel relative bg-dust pb-8">
      <div ref="carousel" class="carousel__inner overflow-hidden flex flex-row flex-nowrap gap-px">
        <img v-for="url in slides" :key="url" class="carousel__slide" :src="require(`~/assets/images/${url}`)">
      </div>
      <a class="arrow absolute right-0 mr-4" @click="move()">
        <IconBase class="text-white transform -rotate-90 w-16">
          <IconArrow />
        </IconBase>
      </a>
      <a class="arrow absolute left-0 ml-4" @click="move(-1)">
        <IconBase class="text-white transform rotate-90 w-16">
          <IconArrow />
        </IconBase>
      </a>
    </div>
  </SectionParent>
</template>

<script lang="ts">
import Vue from 'vue'
const slides = [
  'Valerie-und-Max-3.jpg',
  'Valerie-und-Max-1.jpg',
  'Valerie-und-Max-2.jpg',
  'Valerie-und-Max-4.jpg',
  'Valerie-und-Max-54.jpg',
  'Valerie-und-Max-701.jpg',
  'Valerie-und-Max-703.jpg',
  'Valerie-und-Max-712.jpg',
  'Valerie-und-Max-713.jpg',
  'Valerie-und-Max-730.jpg',
  'Valerie-und-Max-Shooting-117.jpg',
  'Valerie-und-Max-Shooting-159.jpg',
  'Valerie-und-Max-Shooting-1.jpg',
  'Valerie-und-Max-Shooting-2.jpg',
  'Valerie-und-Max-Shooting-69.jpg',
]
export default Vue.extend({
  data: () => ({
    slideIndex: 0
  }),
  computed: {
    slides: () => slides
  },
  methods: {
    move(offset = 1) {
      const slides = this.$refs.carousel?.querySelectorAll('.carousel__slide') || []
      this.slideIndex = (this.slideIndex + offset + slides.length) % slides.length
      const { left } = slides[ this.slideIndex ]?.getBoundingClientRect()
      this.$refs.carousel?.scrollBy({
        top: 0,
        left: left - 16,
      })
    }
  }
})
</script>

<style scoped lang="postcss">
.carousel {
  height: 40vh;
  &__inner {
    height: 100%;
    scroll-behavior: smooth;
  }
  img {
    object-fit: cover;
    float: right;
    scroll-margin: 1rem;
    scroll-snap-align: center;
  }
  .arrow {
    top: calc(50% - 2rem);
  }
}
</style>
