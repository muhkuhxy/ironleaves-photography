<template>
  <SectionParent>
    <div class="bg-bluegray text-white overflow-y-hidden">
      <IlFigure>
        <div class="relative">
          <img class="object-cover w-full"
            src="~/assets/images/Valerie-und-Max-712@2x.jpg"
            alt="Happy guests">
          <div class="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-tr from-black opacity-50"></div>
        </div>
        <IlFigureCaption>
          Handmade<br>with love
        </IlFigureCaption>
      </IlFigure>
      <SvgFlowerWhite class="shape-poly w-1/4 float-right transform -translate-x-8 -translate-y-24 text-white fill-current"/>
      <SectionContent>
        <SectionHeader>
          <template #roofline>Papeterie</template>
          So individuell wie ihr!
        </SectionHeader>
        <IlSpacer />
        <p>Egal was ihr braucht – ich helfe euch, ein Design zu entwickeln, was zu
  eurer Hochzeit passt. Wir finden gemeinsam heraus, wie euer Stil ist und
  dann können wir loslegen.</p>
        <p class="mt-4">Von den Save-the-Date-Karten bis hin zum Dankesgeschenk machen wir
  alles in eurem Stil.</p>
      </SectionContent>
    </div>
    <IlSlider class="pb-8 h-50vh" :slides="slides" />
  </SectionParent>
</template>

<script lang="ts">
import Vue from 'vue'
const slides = [
    'Valerie-und-Max-701.jpg',
    'Valerie-und-Max-712.jpg',
    'Valerie-und-Max-713.jpg',
    'Valerie-und-Max-730.jpg',
]
export default Vue.extend({
  computed: {
    slides: () => slides
  }
})
</script>

<style lang="postcss" scoped>
.shape-poly {
  shape-outside: polygon(68.75% 100.1%, -5.66% -5.19%, 87.5% 28.01%, 110.30% 99.89%);
}
</style>
