<template>
  <SectionParent class="bg-bluegray text-white">
    <IlFigure>
      <picture>
        <source media="(max-width: 767px)" srcset="~/assets/images/mobile/ironleaves-photography-valerie-max-heroshot-mobile.jpg">
        <source media="(min-width: 768px)" srcset="~/assets/images/desktop/ironleaves-photography-valerie-max-heroshot.jpg">
        <img
          class="parallax-pic object-cover w-full max-h-[75vh] scale-[1.2] translate-y-[-10%] md:translate-y-0"
          data-start="top center"
          src="~/assets/images/desktop/ironleaves-photography-valerie-max-heroshot.jpg"
          alt="Tamara Loeffen, Hochzeitsfotografin">
      </picture>
    </IlFigure>
    <div class="relative">
      <SectionLines class="sm:block">
        <SvgHeroLine2 class="absolute text-sunset opacity-75 stroke-current stroke-2 fill-none h-[110%] md:h-full right-0 mr-[23%] md:mr-[34%] rotate-[-20deg] md:rotate-0" />
        <SvgHeroLine1 class="absolute hidden md:block opacity-25 stroke-current stroke-2 fill-none h-[calc(100%+2rem)] right-0 top-[-0.5rem] mr-[11%]" />
        <SvgHeroLine3 class="absolute hidden lg:block opacity-50 stroke-current stroke-2 fill-none h-full right-0 mr-[1%]" />
      </SectionLines>
      <SectionContent class="relative" :fluffy="true">
        <IlAnimatedHeroFlower
          animated-classes="relative float-right w-[50%] md:w-[min(53%,25rem)] lg:w-[53%] mt-[-61%] md:mt-[max(-57%,-25rem)] lg:mt-[-54%] mr-[max(-10%,-2rem)] md:mr-[max(-9%,-4rem)] lg:mr-0 xl:mr-[-2%]"
          static-classes="relative float-right fill-current w-[37%] lg:w-[30%] xl:w-[27%] mt-[-41%] md:mt-[-33%] lg:mt-[-27%] xl:mt-[-24%] -mr-4 lg:mr-[7%]" />
        <SectionHeader>
          <template #roofline>{{ document.roofline }}</template>
          {{ document.title }}
        </SectionHeader>
        <LayoutSpacer />
        <NuxtContent class="flex flex-col gap-4 max-w-xs xl:max-w-sm" :document="document" />
      </SectionContent>
    </div>
  </SectionParent>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    document: {
      type: Object,
      required: true
    }
  }
})
</script>