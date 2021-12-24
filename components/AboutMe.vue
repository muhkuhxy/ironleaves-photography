<template>
  <SectionParent class="text-bluegray relative">
    <IconBase class="text-sunset w-full h-16 -translate-y-4">
      <IconArrow />
    </IconBase>
    <SectionContent class="slide-up flex flex-col lg:flex-row items-center md:gap-y-8">
      <figure class="slide-up relative w-2/3 sm:w-1/2 mb-12 pr-8 lg:pr-16" data-delay="0.3">
        <picture>
          <source media="(max-width: 767px)" srcset="~/assets/images/mobile/ironleaves-photography-ueber-mich-tamara-loeffen-SW-mobile.jpg">
          <source media="(min-width: 768px)" srcset="~/assets/images/desktop/ironleaves-photography-ueber-mich-tamara-loeffen-SW.jpg">
          <img
            src="~/assets/images/desktop/ironleaves-photography-ueber-mich-tamara-loeffen-SW.jpg"
            alt="Tamara Loeffen Portrait">
        </picture>
        <SvgFlowerGrass class="text-sunset fill-current w-[45%] lg:w-[40%] absolute bottom-0 right-0 mr-[max(-2.5rem,-8%)] sm:mr-[-11%] lg:mr-0 -mb-8 md:-mb-12"/>
      </figure>
      <div class="slide-up lg:flex-initial max-w-prose lg:max-w-[none] lg:w-1/2 text-center lg:text-left">
        <SectionHeader>
          <template #roofline>Über mich</template>
          Hoch&shy;zeits&shy;foto&shy;grafin&nbsp;&amp; Gestalterin
        </SectionHeader>
        <LayoutSpacer />
        <div class="lg:pl-8 xl:lp-16 flex flex-col gap-4">
          <p>
            Ich heiße Tamara und freue mich jetzt schon sehr darauf, euch kennenzulernen!
          </p>
          <p>
            Aufgewachsen bin ich in Bayreuth, aber inzwischen wohne ich in der wunderschönen Eifel bei Monschau. Ich bin leidenschaftlich gerne mit meiner Kamera unterwegs und liebe die Natur, Sonnenuntergänge, gutes Essen, viel Lachen und warmen Kakao an kalten Herbsttagen.
          </p>
          <IlTextExpander>
            <p>
              Gelernt habe ich den wunderbaren Job der Mediengestalterin. Wenn ich also gerade keine Fotos mache, gestalte ich als Freelancerin Websites, Logos und sehr gerne auch Eure Hochzeitspapeterie.
            </p>
            <p>
              Auf Hochzeiten ziehen mich die Emotionen, die Aufregung und die ganz intimen und einzigartigen Momente besonders in den Bann. Ich denke, dass es im Leben unglaublich wichtig ist, das zu tun, was man liebt und ich kann mir nichts Schöneres vorstellen, als Liebe, Glück und Vertrautheit in meinen Fotos für Euch festzuhalten und euch damit ein Lächeln ins Gesicht zu zaubern. Ich empfinde es immer als eine sehr große Ehre, wenn ich mit Menschen zusammen sein darf, die sich mit ganz viel Liebe und Hingabe einander zugewendet haben und den Anfang ihres gemeinsamen, restlichen Lebens miteinander feiern möchten. Ich würde mich sehr freuen, wenn ich das für Euch als Hochzeitsfotografin machen darf.
            </p>
          </IlTextExpander>
          <LayoutSpacer />
          <ButtonEffect class="text-sunset mx-auto lg:mx-0" to="/#contact">
            Schreibt mich gerne an!
          </ButtonEffect>
        </div>
      </div>
    </SectionContent>
    <LayoutSpacer />
    <IconBase class="text-sunset w-full h-16 absolute bottom-0 -mb-4 z-10">
      <IconArrow />
    </IconBase>
  </SectionParent>
</template>

<script lang="ts">
import Vue from 'vue'
import { VueConstructor } from 'vue/types/vue'
import { IlInjection } from '@/types/declarations'
import { slideUp } from '@/lib/gsap'

export default (Vue as VueConstructor<Vue & IlInjection>).extend({
  inject: {
    $il: '$il'
  } as Record<keyof IlInjection, string>,
  data: () => ({
    animationInitialized: false
  }),
  async mounted() {
    await this.$il.breakpointsReady
    this.initAnimations()
  },
  updated() {
    if (!this.animationInitialized) {
      this.initAnimations()
    }
  },
  methods: {
    initAnimations() {
      if (this.$el.tagName && this.$il.breakpoints.gtlg) {
        Array.from(this.$el.querySelectorAll('.slide-up'))
          .forEach(el => {
            const { delay, y } = (el as HTMLElement).dataset
            slideUp({ delay, y }, el as HTMLElement)
          })
        this.animationInitialized = true
      }
    },
  }
})
</script>
