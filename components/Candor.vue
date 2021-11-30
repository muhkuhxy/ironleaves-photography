<template>
  <SectionParent class="bg-bluegray text-white relative">
    <div class="relative lg:absolute lg:w-[50%] 2xl:w-[40%] lg:inset-y-0 lg:right-0">
      <IlFigure class="slide-up lg:h-full lg:w-full" data-delay="0.3">
        <picture>
          <source media="(max-width: 767px)" srcset="~/assets/images/mobile/ironleaves-photography-werte-mobile.jpg">
          <source media="(min-width: 768px)" srcset="~/assets/images/desktop/ironleaves-photography-werte.jpg">
          <img
            class="parallax-pic object-cover w-full max-h-[75vh] lg:max-h-full lg:h-full translate-y-[-10%] scale-[1.23]"
            alt="Ehrliche Schnappschüsse">
        </picture>
        <IlGradient direction="disabled" :half-height="true" class="bg-gradient-to-t lg:bg-gradient-to-br lg:top-0 lg:opacity-25 translate-y-2 lg:translate-y-0" />
      </IlFigure>
      <IlFigureCaption class="lg:text-right lg:left-0 lg:top-0 lg:pt-12 lg:px-0 lg:ml-[-40%] z-20">
        <div class="slide-up" data-delay="0.8">Embrace the flaws<br> and the gems</div>
      </IlFigureCaption>
    </div>
    <SectionLines class="slide-up xl:block z-10" data-delay="1" data-y="0">
      <SvgHeroLine1 class="absolute text-white opacity-25 stroke-current stroke-2 fill-none h-[calc(100%+2rem)] mt-[-0.5rem] ml-[37%] 2xl:ml-[50%]" />
      <SvgHeroLine2 class="absolute text-sunset opacity-75 stroke-current stroke-2 fill-none h-full ml-[49%] 2xl:ml-[55%]" />
    </SectionLines>
    <SectionContent class="relative z-10">
      <div class="lg:py-32 lg:mr-[55%] 2xl:mr-[45%]">
        <SvgSingleGrass
          class="slide-up relative lg:absolute w-[39%] sm:w-[30%] lg:w-[18%] float-right mt-[-25%] md:mr-6 2xl:mr-[28%] mb-4 lg:-mb-2 lg:ml-[45%] 2xl:ml-[55%] text-white fill-current lg:bottom-0 lg:left-0 z-10"
          data-y="0"/>
        <div class="slide-up">
          <SectionHeader>
            <template #roofline>Meine Werte</template>
            Ehrlich authentisch
          </SectionHeader>
          <IlSpacer />
          <p class="max-w-prose mb-4">
            Ich glaube ganz fest daran, dass jeder Mensch schön ist.
          </p>
          <p class="max-w-prose mb-4">
            Denn alle scheinbar unperfekten Sachen, machen eine Sache erst zu etwas ganz Besonderem. Jeder Makel erzählt eine persönliche Geschichte. Jede Falte enthält Weisheit. Jedes aufrichtige Lachen zeigt das Kämpferherz dahinter. Deswegen fotografiere ich keinen gestellten Glanz und Glamour. Ich mache keine Hautretuschen, bis man keine Poren mehr sehen kann. Und ich bin auch kein Fan von herausgestreckten Brüsten, eingezogenem Bauch und aufgesetzem Lächeln.
          </p>
          <IlTextExpander class="items-start">
            <p>
              Ich fotografiere die perfekte Unperfektheit. Denn die schönsten Bilder mit Geschichte entstehen nur, wenn man sich nicht verstellt. Wenn man sich so liebt, wie man ist. Wenn man sich nicht zu ernst nimmt. Und selbst, wenn ihr noch nie vor der Kamera wart: Alles was ich brauche, ist gute Laune und Euer Gefühl zueinander. Ich hoffe, wenn ihr eure fertigen Bilder dann seht, geht es Euch so wie mir: Regelrecht platzend vor Freude über so wunderbare, schöne Menschen! :)
            </p>
          </IlTextExpander>
        </div>
      </div>
    </SectionContent>
  </SectionParent>
</template>

<script lang="ts">
import Vue from 'vue'
import { VueConstructor } from 'vue/types/vue'
import { IlInjection } from '@/types/declarations'
import { Gsap, gsapPromise, slideUp } from '@/lib/gsap'

export default (Vue as VueConstructor<Vue & IlInjection>).extend({
  inject: {
    $il: '$il'
  } as Record<keyof IlInjection, string>,
  mounted() {
    gsapPromise.then(this.initLoadingAnimation)
  },
  methods: {
    initLoadingAnimation(gsap: Gsap) {
      if (this.$il.breakpoints.gtlg) {
        slideUp(gsap, { delay: undefined, y: undefined }, this.$el as HTMLElement)
        Array.from(this.$el.querySelectorAll('.slide-up'))
          .forEach(el => {
            const { delay, y } = (el as HTMLElement).dataset
            slideUp(gsap, { delay, y }, el as HTMLElement)
          }
        )
      }
    }
  }
})
</script>
