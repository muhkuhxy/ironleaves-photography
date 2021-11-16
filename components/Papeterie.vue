<template>
  <SectionParent>
    <div class="bg-bluegray text-white overflow-y-hidden relative">
      <IlFigure class="lg:absolute lg:w-[50%] 2xl:w-[40%] lg:inset-y-0 lg:right-0">
        <img
          class="object-cover w-full h-full"
          src="~/assets/images/Valerie-und-Max-712@2x.jpg"
          alt="Happy guests">
        <IlGradient direction="top-right" />
        <IlFigureCaption class="lg:text-right lg:top-0 lg:left-0 lg:pt-12 lg:px-0 lg:ml-[-30%] z-10">
          Handmade<br>with love
        </IlFigureCaption>
      </IlFigure>
      <SectionLines class="xl:block">
        <SvgHeroLine1 class="absolute text-white opacity-25 stroke-current stroke-2 fill-none h-[calc(100%+7rem)] mt-[-4rem] ml-[37%] 2xl:ml-[47%]" />
        <SvgHeroLine2 class="absolute text-sunset opacity-75 stroke-current stroke-2 fill-none h-full ml-[48%] xl:ml-[49%] 2xl:ml-[55%]" />
      </SectionLines>
      <SectionContent class="relative">
        <SvgFlowerWhite class="shape-poly float-right w-[40%] sm:w-[30%] lg:w-auto lg:h-[50%] top-0 lg:top-[unset] lg:left-0 mt-[-40%] sm:mt-[-30%] lg:ml-[45%] 2xl:ml-[55%] lg:pl-4 lg:absolute lg:bottom-0 text-white fill-current"/>
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
  shape-outside: polygon(75.23% 110.65%, -3.22% -17.56%, 18.98% -43.21%, 119.22% 39.56%);

  @screen lg {
    shape-outside: none;
  }
}

</style>
