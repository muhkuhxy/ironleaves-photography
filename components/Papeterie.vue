<template>
  <SectionParent>
    <div class="bg-bluegray text-white overflow-y-hidden relative">
      <IlFigure class="lg:absolute lg:w-[50%] 2xl:w-[40%] lg:inset-y-0 lg:right-0">
        <img
          class="object-cover w-full h-full"
          src="~/assets/images/Valerie-und-Max-712@2x.jpg"
          alt="Happy guests">
        <IlGradient direction="top-right" />
        <IlFigureCaption class="lg:text-right lg:top-0 lg:left-0 lg:pt-12 lg:px-0 lg:ml-[-30%] z-20">
          Handmade<br>with love
        </IlFigureCaption>
      </IlFigure>
      <div class="hidden xl:block absolute z-10 inset-0 overflow-hidden">
        <SvgHeroLine1 class="absolute text-white opacity-25 stroke-current stroke-2 fill-none h-[110%] mt-[-2.5%] ml-[37%] 2xl:ml-[50%]" />
        <SvgHeroLine2 class="absolute text-sunset opacity-50 stroke-current stroke-2 fill-none h-[110%] mt-[-2.5%] ml-[48%] xl:ml-[49%] 2xl:ml-[55%]" />
      </div>
      <SectionContent class="relative z-20">
        <SvgFlowerWhite class="shape-poly float-right w-[33%] sm:w-[30%] lg:w-[20%] top-0 lg:top-[unset] lg:left-0 mt-[-30%] sm:mt-[-20%] lg:ml-[45%] 2xl:ml-[55%] lg:pl-8 lg:absolute lg:bottom-0 text-white fill-current z-10"/>
        <div class="lg:py-32 lg:mr-[55%] 2xl:mr-[45%]">
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
    <IlSlider class="pb-8 h-[50vh]" :slides="slides" />
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
  shape-outside: polygon(74.01% 105.69%, 40.53% -10.65%, 43.71% -89.7%, 103.66% 113.29%);

  @screen lg {
    shape-outside: none;
  }
}

</style>
