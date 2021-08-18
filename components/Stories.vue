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
        Valerie &amp; Max
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
    <div ref="carousel"
      class="carousel relative bg-dust overflow-hidden pb-8">
      <div class="carousel__inner relative flex flex-row flex-nowrap gap-px">
        <img class="carousel__current" src="~/assets/images/Valerie-und-Max-3.jpg">
        <img src="~/assets/images/Valerie-und-Max-1.jpg">
        <img src="~/assets/images/Valerie-und-Max-2.jpg">
        <img src="~/assets/images/Valerie-und-Max-4.jpg">
        <img src="~/assets/images/Valerie-und-Max-54.jpg">
        <img src="~/assets/images/Valerie-und-Max-701.jpg">
        <img src="~/assets/images/Valerie-und-Max-703.jpg">
        <img src="~/assets/images/Valerie-und-Max-712.jpg">
        <img src="~/assets/images/Valerie-und-Max-713.jpg">
        <img src="~/assets/images/Valerie-und-Max-730.jpg">
        <img src="~/assets/images/Valerie-und-Max-Shooting-117.jpg">
        <img src="~/assets/images/Valerie-und-Max-Shooting-159.jpg">
        <img src="~/assets/images/Valerie-und-Max-Shooting-1.jpg">
        <img src="~/assets/images/Valerie-und-Max-Shooting-2.jpg">
        <img src="~/assets/images/Valerie-und-Max-Shooting-69.jpg">
      </div>
      <a class="arrow absolute right-0 mr-4" @click="next">
        <IconBase class="text-white transform -rotate-90 w-16"
          icon-name="Rechts">
          <IconArrow />
        </IconBase>
      </a>
    </div>
  </SectionParent>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    next() {
      const carousel = this.$refs.carousel
      console.log({
        x: carousel?.scrollLeft
      })
      const current = carousel?.querySelector('.carousel__current')
      const next = current.nextElementSibling
      if (next) {
        current.classList.toggle('carousel__current')
        next.classList.toggle('carousel__current')
        const { left } = next.getBoundingClientRect()
        carousel?.scrollBy({
          top: 0,
          left,
          behavior: 'smooth'
        })
      }
      // console.log({next})
    }
  }
})
</script>

<style scoped lang="postcss">
.carousel {
  height: 40vh;
  &__inner {
    height: 100%;
  }
  img {
    object-fit: cover;
    float: right;
    scroll-margin: 1rem;
  }
  .arrow {
    top: calc(50% - 2rem);
  }
}
</style>
