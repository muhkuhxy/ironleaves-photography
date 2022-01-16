<template>
  <SectionParent>
    <IconBase class="text-sunset w-full h-16 mt-8">
      <IconArrow />
    </IconBase>
    <LayoutSpacer />

    <SectionContent class="slide-up text-bluegray">
      <div class="flex flex-col lg:flex-row items-center md:gap-8">
        <figure class="slide-up lg:order-2 relative w-full sm:w-2/3 mb-12 pl-8 lg:pl-16" data-delay="0.3">
          <picture class="after:absolute after:inset-0 after:w-1/2 after:bg-gradient-to-r after:from-white">
            <source media="(max-width: 767px)" srcset="~/assets/images/mobile/ironleaves-photography-blog-mobile.jpg">
            <source media="(min-width: 768px)" srcset="~/assets/images/desktop/ironleaves-photography-blog.jpg">
            <img
              class="w-full object-cover"
              src="~/assets/images/desktop/ironleaves-photography-blog.jpg"
              alt="Tamara Loeffen Portrait">
          </picture>
          <SvgPetalFlower class="text-emerald fill-current w-[min(30%,7rem)] xl:w-32 absolute bottom-0 left-0 -mb-8 sm:-mb-12 lg:ml-6 rotate-[-20deg]"/>
        </figure>
        <div class="slide-up lg:order-1 lg:flex-initial max-w-prose lg:max-w-[none] lg:w-1/2 text-center lg:text-left">
          <SectionHeader>
            <template #roofline>Stories</template>
            Echte Emotionen
          </SectionHeader>
          <LayoutSpacer />
          <p>
            Hier gebe ich Euch einen Einblick in die wunderschönen Hochzeiten, die ich schon begleiten durfte. Außerdem spreche ich ein bisschen aus dem Nähkästchen und gebe Euch Tipps &amp; Tricks, wie ihr Eure Hochzeit am besten gestalten könnt, wie ich drauf bin und was hinter der Kamera so abläuft.
          </p>
        </div>
      </div>
    </SectionContent>

    <div class="bg-emerald text-white">
      <SectionContent>
        <div class="mx-auto max-w-[40ch] sm:max-w-[50ch] lg:max-w-[54ch] text-center">
          <h2>Hochzeitsstories, Tipps und Tricks und viel mehr!</h2>
        </div>
        <LayoutSpacer />
        <p class="mx-auto max-w-prose text-center">
          Erhaltet hier einen exklusiven Einblick in die wunderschönen Hochzeiten, die ich begleiten durfte! Außerdem gebe ich euch hilfreiche Tipps und Tricks, wie ihr Euren wichtigen Tag gestalten könnt und was ihr für Euren Hochzeitsfotografen beachten müsst.
        </p>
        <LayoutSpacer />
        <NuxtLink to="/stories" class="block w-fit mx-auto">
          <ButtonEffect>
            Alle Beiträge sehen
          </ButtonEffect>
        </NuxtLink>
      </SectionContent>
    </div>

    <div class="h-[50vh]">
      <LazyIlSlider
        v-if="trigger"
        class="pb-8 h-full"
        :slides="slides" />
    </div>

    <IconBase class="text-sunset w-full h-16 mt-8 mb-12">
      <IconArrow />
    </IconBase>

  </SectionParent>
</template>

<script lang="ts">
import Vue from 'vue'
import { VueConstructor } from 'vue/types/vue'
import { stories } from './slides'
import { IlInjection } from '@/types/declarations'
import { ScrollTrigger } from '@/lib/gsap'

export default (Vue as VueConstructor<Vue & IlInjection>).extend({
  inject: {
    $il: '$il'
  } as Record<keyof IlInjection, string>,
  data: () => ({
    scrollTrigger: null as null | ScrollTrigger,
    trigger: false,
    animationInitialized: false,
  }),
  computed: {
    slides: () => stories,
  },
  async mounted() {
    await this.$il.breakpointsReady
    this.initAnimations()
  },
  beforeDestroy() {
    this.scrollTrigger?.kill();
  },
  updated() {
    if (!this.animationInitialized) {
      this.initAnimations()
    }
  },
  methods: {
    initAnimations() {
      if (!this.$el.tagName) {
        return;
      }
      this.scrollTrigger = ScrollTrigger.create({
        trigger: this.$el,
        start: () => 'top-=50% bottom',
        end: () =>'bottom+=50% top',
        onToggle: (self: any) => {
          setTimeout(() => { this.trigger = true }, 500)
          self.kill()
          this.scrollTrigger = null
        }
      })
      this.animationInitialized = true
    },
  }
})
</script>
