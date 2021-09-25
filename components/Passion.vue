<template>
  <SectionParent class="bg-emerald text-white relative">
    <IlFigure class="shadow-lg">
      <img class="object-cover w-full max-h-80vh"
        src="~/assets/images/Pfad-1.jpg"
        alt="Glückliches Ehepaar">
      <IlFigureCaption>
        Moments for<br>Eternity
      </IlFigureCaption>
    </IlFigure>
    <div class="relative">
      <IlContainer class="absolute inset-0 overflow-hidden">
        <SvgHeroLine1 class="hidden md:block absolute text-white opacity-25 stroke-current stroke-2 fill-none h-overflow right-0 -top-5% -mr-15% lg:mr-12%" />
        <SvgHeroLine2 class="hidden md:block absolute text-sunset opacity-75 stroke-current stroke-2 fill-none h-full right-0 mr-29% mr:31% lg:mr-34%" />
        <SvgHeroLine3 class="hidden lg:block absolute text-white opacity-50 stroke-current stroke-2 fill-none h-full right-0 mr-1%" />
      </IlContainer>
      <SectionContent>
        <SvgHeroFlower class="hero-flower w-1/3 lg:w-1/4 xl:w-23% relative -mt-42% sm:-mt-30% md:-mt-22% lg:-mt-17% xl:-mt-16% lg:mr-10% float-right text-white fill-current "/>
        <SectionHeader>
          <template #roofline>Leidenschaft</template>
          Eure einzig&shy;artigen<br class="hidden md:block"> Momente
        </SectionHeader>
        <IlSpacer class="md:mt-4" />
        <p class="max-w-xs">
          Seid ihr schon gespannt auf Eure Hochzeit? Ich halte eure unvergesslichen Momente, die zahlreichen Emotionen, eure ganz besondere
          intime Bindung zueinander und diesen wichtigen Tag in eurem Leben für euch mit viel Leidenschaft fest!
        </p>
        <IlSpacer class="md:mt-4" />
        <ButtonEffect class="" @click="scrollTo('stories')">Zu den Bilderstories</ButtonEffect>
      </SectionContent>
      <IlSpacer class="hidden md:block" />
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
