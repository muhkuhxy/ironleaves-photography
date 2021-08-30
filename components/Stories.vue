<template>
  <SectionParent class="">
    <IconBase class="text-sunset w-16 w-full h-16 mt-8">
      <IconArrow />
    </IconBase>
    <SectionHeader class="my-8 text-center">
      <template #roofline>Stories</template>
      <span class="text-bluegray">Echte Emotionen</span>
    </SectionHeader>
    <SectionContent class="bg-dust text-bluegray pb-6">
      <img class="w-5/6 border-8 border-solid border-white filter drop-shadow"
        src="~/assets/images/Sandra-und-Jonas-Hochzeit-Reportage-1.jpg"
        alt="Happy couple">
      <SvgSingleBranch class="w-1/5 text-emerald fill-current absolute right-0 transform -translate-x-12 -translate-y-32" />
      <IlSpacer />
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
      <IlSpacer :m="1" />
      <ButtonArrow />
    </SectionContent>
    <IlSlider class="bg-dust pb-8 h-50vh"
      :slides="slides" />
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
  computed: {
    slides: () => slides
  },
})
</script>

