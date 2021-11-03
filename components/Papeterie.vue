<template>
  <SectionParent>
    <div class="bg-bluegray text-white overflow-y-hidden relative">
      <IlFigure class="lg:absolute lg:w-50% 2xl:w-40% lg:inset-y-0 lg:right-0">
        <img
          class="object-cover w-full h-full"
          src="~/assets/images/Valerie-und-Max-712@2x.jpg"
          alt="Happy guests">
        <IlGradient direction="top-right" />
        <IlFigureCaption class="lg:text-right lg:top-0 lg:pt-12 lg:px-0 transform lg:-translate-x-40% lg:w-max">
          Handmade<br>with love
        </IlFigureCaption>
      </IlFigure>
      <SvgFlowerWhite class="shape-poly w-1/4 lg:w-15% 2xl:w-13% float-right lg:float-none lg:absolute transform -translate-x-8 -translate-y-24 lg:transform-none lg:right-0 lg:bottom-0 lg:mr-40% 2xl:mr-30% text-white fill-current "/>
      <div class="hidden xl:block absolute z-10 inset-0 overflow-hidden">
        <SvgHeroLine1 class="absolute text-white opacity-25 stroke-current stroke-2 fill-none h-overflow -mt-2.5% ml-37% 2xl:ml-50%" />
        <SvgHeroLine2 class="absolute text-sunset opacity-50 stroke-current stroke-2 fill-none h-overflow -mt-2.5% ml-48% xl:ml-49% 2xl:ml-55%" />
      </div>
      <SectionContent>
        <div class="lg:py-32 lg:mr-55% 2xl:mr-45%">
          <SectionHeader>
            <template #roofline>Papeterie</template>
            So individuell wie ihr!
          </SectionHeader>
          <IlSpacer class="md:mt-4 xl:mt-8" />
          <p class="max-w-prose">Egal was ihr braucht – ich helfe euch, ein Design zu entwickeln, was zu
    eurer Hochzeit passt. Wir finden gemeinsam heraus, wie euer Stil ist und
    dann können wir loslegen.</p>
          <p class="max-w-prose mt-4">Von den Save-the-Date-Karten bis hin zum Dankesgeschenk machen wir
    alles in eurem Stil.</p>
        </div>
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
