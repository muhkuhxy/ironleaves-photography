<template>
  <SectionParent>
    <SectionContent class="slide-up text-bluegray" :fluffy="true">
      <div class="flex flex-col lg:flex-row items-center md:gap-8">
        <figure class="slide-up relative w-full sm:w-2/3 mb-12 pl-8 lg:pl-16" data-delay="0.3">
          <picture class="after:absolute after:inset-0 after:w-1/2 after:bg-gradient-to-r after:from-white">
            <source media="(max-width: 767px)" srcset="~/assets/images/mobile/ironleaves-photography-blog-mobile.jpg">
            <source media="(min-width: 768px)" srcset="~/assets/images/desktop/ironleaves-photography-blog.jpg">
            <img
              class="w-full object-cover"
              src="~/assets/images/desktop/ironleaves-photography-blog.jpg"
              alt="Tamara und Timon">
          </picture>
          <SvgPetalFlower class="text-emerald fill-current w-[min(30%,7rem)] xl:w-32 absolute bottom-0 left-0 -mb-8 sm:-mb-12 lg:ml-6 rotate-[-20deg]"/>
        </figure>

        <div class="slide-up lg:flex-initial max-w-prose lg:max-w-[none] lg:w-1/2 text-center lg:text-left">
          <SectionHeader>
            <template #roofline>Aus dem Nähkästchen</template>
            Über mich
          </SectionHeader>
          <LayoutSpacer />
          <div class="max-w-prose flex flex-col gap-y-4">
            <p>Ich bin leidenschaftlich gerne mit meiner Kamera unterwegs. Nicht nur beruflich. Ich liebe Natur- und Makroaufnahmen und verlasse auch für Spaziergänge selten das Haus ohne Kamera.</p>
            <p>Am liebsten bin ich draußen in der Natur. Ich finde Tiere, Sonnenuntergänge, sonnige Nebeltage, den Geruch von Regen und kalte, bunte Herbsttage total toll. Und wenn’s rein in die Bude geht, sind gutes Essen, Musik, viel Lachen, ein warmes Bett, ein spannendes Buch und warme Mousse au Chocolat total genial.</p>
            <p>Ich bin ein großes Fangirl von meinem Ehemann und meinem Auto. Für Mathe bin ich viel zu verpeilt. Meine Lieblingsfarbe ist blau. Ich bin ein kleiner Zwerg.</p>
          </div>
        </div>
      </div>
    </SectionContent>
  </SectionParent>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'

export default Vue.extend({
  data: () => ({
    animationInitialized: false
  }),
  computed: mapGetters('breakpoints', ['breakpoints']),
  async mounted() {
    await this.breakpointsReady()
    this.initAnimations()
  },
  updated() {
    if (!this.animationInitialized) {
      this.initAnimations()
    }
  },
  methods: {
    ...mapActions('breakpoints', ['breakpointsReady']),
    initAnimations() {
      if (!this.$el.tagName) {
        return
      }
      if (this.breakpoints.gtlg) {
        this.$anim.slideUp({ delay: undefined, y: undefined }, this.$el as HTMLElement)
        Array.from(this.$el.querySelectorAll('.slide-up'))
          .forEach(el => {
            const { delay, y } = (el as HTMLElement).dataset
            this.$anim.slideUp({ delay, y }, el as HTMLElement)
          })
      }
      this.animationInitialized = true
    }
  }
})
</script>
