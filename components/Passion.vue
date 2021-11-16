<template>
  <SectionParent class="bg-emerald text-white relative">
    <IlFigure class="shadow-lg">
      <img
        class="object-cover w-full max-h-[75vh]"
        src="~/assets/images/Pfad-1.jpg"
        alt="Glückliches Ehepaar">
      <IlGradient :half-height="true" />
      <IlFigureCaption class="hero">
        Moments for<br>Eternity
      </IlFigureCaption>
    </IlFigure>
    <div class="relative">
      <IlContainer class="absolute inset-0 overflow-hidden">
        <SvgHeroLine1 class="hidden md:block absolute opacity-25 stroke-current stroke-2 fill-none h-[110%] right-0 top-[-5%] mr-[-15%] lg:mr-[12%]" />
        <SvgHeroLine2 class="hidden sm:block absolute md:transform-none rotate-180 text-sunset opacity-75 stroke-current stroke-2 fill-none h-full right-0 mr-[29%] md:mr-[31%] lg:mr-[34%]" />
        <SvgHeroLine3 class="hidden lg:block absolute opacity-50 stroke-current stroke-2 fill-none h-full right-0 mr-[1%]" />
      </IlContainer>
      <SectionContent class="relative">
        <SvgHeroFlower class="hero-flower w-[37%] lg:w-[30%] xl:w-[27%] relative mt-[-41%] md:mt-[-33%] lg:mt-[-27%] xl:mt-[-24%] -mr-4 lg:mr-[7%] float-right fill-current "/>
        <SectionHeader>
          <template #roofline>Leidenschaft</template>
          Eure einzig&shy;artigen<br class="hidden md:block"> Momente
        </SectionHeader>
        <IlSpacer class="md:mt-4 xl:mt-8" />
        <p class="max-w-xs xl:max-w-sm">
          Seid ihr schon gespannt auf Eure Hochzeit? Ich halte eure unvergesslichen Momente, die zahlreichen Emotionen, eure ganz besondere
          intime Bindung zueinander und diesen wichtigen Tag in eurem Leben für euch mit viel Leidenschaft fest!
        </p>
        <IlSpacer class="md:mt-4 xl:mt-8" />
        <ButtonEffect class="" @click="scrollTo('stories')">Zu den Bilderstories</ButtonEffect>
      </SectionContent>
    </div>
  </SectionParent>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    scrollTo(target: string) {
      this.$nuxt.$emit('scrollTo', target)
    }
  }
})
</script>

<style lang="postcss" scoped>
.hero-flower {
  shape-outside: polygon(112.95% 2.53%, -6.32% -21.73%, 28.48% 35.00%, 21.59% 65.9%, 87.94% 101.47%);
}
</style>
