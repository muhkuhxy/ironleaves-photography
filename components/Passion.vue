<template>
  <SectionParent
    id="passion"
    class="scroll-target bg-emerald text-white relative">
    <IlFigure class="shadow-lg">
      <picture>
        <source media="(max-width: 767px)" srcset="~/assets/images/mobile/ironleaves-photography-valerie-max-heroshot-mobile.jpg">
        <source media="(min-width: 768px)" srcset="~/assets/images/desktop/ironleaves-photography-valerie-max-heroshot.jpg">
        <img
          class="parallax-pic object-cover w-full max-h-[75vh] scale-[1.2] translate-y-[-10%] md:translate-y-0"
          data-start="top center"
          src="~/assets/images/desktop/ironleaves-photography-valerie-max-heroshot.jpg"
          alt="Hochzeitsshooting im Wald">
      </picture>
      <IlGradient class="translate-y-2" :half-height="true" />
      <IlFigureCaption class="hero">
        Moments&thinsp;for<br>Eternity
      </IlFigureCaption>
    </IlFigure>
    <div class="relative bg-emerald">
      <SectionLines class="sm:block">
        <SvgHeroLine2 class="absolute text-sunset opacity-75 stroke-current stroke-2 fill-none h-[110%] md:h-full right-0 mr-[23%] md:mr-[34%] rotate-[-20deg] md:rotate-0" />
        <SvgHeroLine1 class="absolute hidden md:block opacity-25 stroke-current stroke-2 fill-none h-[calc(100%+2rem)] right-0 top-[-0.5rem] mr-[11%]" />
        <SvgHeroLine3 class="absolute hidden lg:block opacity-50 stroke-current stroke-2 fill-none h-full right-0 mr-[1%]" />
      </SectionLines>
      <SectionContent class="relative">
        <SvgHeroFlower />
        <SectionHeader>
          <template #roofline>Leidenschaft</template>
          Eure einzig&shy;artigen<br class="hidden md:block"> Momente
        </SectionHeader>
        <LayoutSpacer />
        <p class="max-w-xs xl:max-w-sm">
          Seid ihr schon gespannt auf Eure Hochzeit? Die schönen, unvergesslichen Momente, die zahlreichen Emotionen und eure ganz besondere intime Bindung zueinander? Als Fotografin verewige ich euren wichtigen Tag in zeitlosen Bildern und zaubere mit ganz viel Leidenschaft Erinnerungen für die Ewigkeit.
        </p>
        <LayoutSpacer />
        <ButtonEffect to="/#stories">Zu den Bilderstories</ButtonEffect>
      </SectionContent>
    </div>
  </SectionParent>
</template>

<script lang="ts">
import Vue from 'vue'
import { gsap } from '@/lib/gsap'
import { retry } from '~/lib/functions'

export default Vue.extend({
  data: () => ({
    animationInitialized: false
  }),
  mounted() {
    this.initAnimations()
  },
  updated() {
    if (!this.animationInitialized) {
      this.initAnimations()
    }
  },
  methods: {
    initAnimations() {
      if (!this.$el.tagName) {
        return
      }
      retry('passion: parallax', 3, 250, () => {
        const img = this.$el.querySelector('.parallax-pic') as HTMLElement
        if (!img) {
          return false
        }
        gsap.to(img, {
          ease: "none",
          scrollTrigger: {
            trigger: img,
            scrub: true,
            // markers: true,
            start: () =>
              `top+=10% ${document.querySelector('nav')?.getBoundingClientRect()?.bottom || 'bottom'}`
          },
          yPercent: 20
        })
        return true
      })
      this.animationInitialized = true
    }
  }
})
</script>
