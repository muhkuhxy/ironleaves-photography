<template>
  <SectionParent>
    <div class="slide-up bg-bluegray text-white overflow-y-hidden relative">
      <div class="relative lg:absolute lg:w-[50%] 2xl:w-[40%] lg:inset-y-0 lg:right-0">
        <IlFigure class="slide-up lg:w-full lg:h-full" data-delay="0.3">
          <picture>
            <source media="(max-width: 767px)" srcset="~/assets/images/mobile/ironleaves-photography-papeterie-mobile.jpg">
            <source media="(min-width: 768px)" srcset="~/assets/images/desktop/ironleaves-photography-papeterie.jpg">
            <img
              class="parallax-pic object-cover w-full max-h-[75vh] lg:max-h-full lg:h-full scale-[1.3]"
              src="~/assets/images/desktop/ironleaves-photography-papeterie.jpg"
              alt="Individuelle Papeterie gestaltet mit Liebe zum Detail">
          </picture>
          <IlGradient direction="top-right" />
        </IlFigure>
        <IlFigureCaption class="lg:text-right lg:top-0 lg:left-0 lg:pt-12 lg:px-0 lg:ml-[-30%] z-10">
          <div class="slide-up" data-delay="1">
            Handmade<br>with love
          </div>
        </IlFigureCaption>
      </div>
      <SectionLines class="slide-up xl:block" data-y="0" data-delay="1">
        <SvgHeroLine1 class="absolute text-white opacity-25 stroke-current stroke-2 fill-none h-[calc(100%+7rem)] mt-[-4rem] ml-[37%] 2xl:ml-[47%]" />
        <SvgHeroLine2 class="absolute text-sunset opacity-75 stroke-current stroke-2 fill-none h-full ml-[48%] xl:ml-[49%] 2xl:ml-[55%]" />
      </SectionLines>
      <SectionContent class="relative">
        <SvgFlowerWhite
          class="slide-up shape-poly float-right w-[40%] sm:w-[30%] lg:w-auto lg:h-[50%] top-0 lg:top-[unset] lg:left-0 mt-[-40%] sm:mt-[-30%] lg:ml-[45%] 2xl:ml-[55%] lg:pl-4 lg:absolute lg:bottom-0 text-white fill-current"
          data-y="0" />
        <div class="lg:py-32 lg:mr-[55%] 2xl:mr-[45%]">
          <div class="slide-up">
            <SectionHeader>
              <template #roofline>Papeterie</template>
              So individuell wie ihr!
            </SectionHeader>
            <LayoutSpacer />
            <p class="max-w-prose mb-4">
              Wenn ich nicht gerade als Fotografin fleißig Pärchenfotos schieße, bin ich freiberufliche Grafikdesignerin für <a class="underline"  target="_blank" href="https://ironleaves-design.com">Ironleaves Design</a>. Egal was ihr braucht – ich helfe euch, ein individuelles Design zu entwickeln, was zu eurer Hochzeit passt. Dabei können wir eure Farben, Blumen und Deko einbeziehen. Wir finden gemeinsam euren Stil und ich gestalte die Save-the-Date-Karten, Einladungen, Menükarten und Sitzpläne nach Euren Vorstellungen. Garantiert einzigartig und mit viel Liebe gemacht!
            </p>
            <p class="max-w-prose">
              In der ganzen Zeit kann ich euch bei euren Planungen unterstützen. Das gibt euch die Sicherheit, dass ihr nichts vergesst und ihr könnt eure Papeterie entspannt mir überlassen. Und falls ich Euch sogar als Hochzeitsfotografin begleiten darf, können wir uns in Ruhe im Vorfeld beschnuppern und vielleicht schon schöne Fotos von einem Kennenlern-Shooting in die Gestaltung einbeziehen. ;)
            </p>
          </div>
        </div>
      </SectionContent>
    </div>

    <div class="h-[50vh]">
      <LazyIlSlider
        v-if="trigger"
        class="pb-8 h-full"
        :slides="slides" />
    </div>
  </SectionParent>
</template>

<script lang="ts">
import Vue from 'vue'
import { VueConstructor } from 'vue/types/vue'
import { papeterie } from './slides'
import { IlInjection } from '@/types/declarations'
import { parallax, ScrollTrigger, slideUp } from '@/lib/gsap'

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
    slides: () => papeterie,
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
      if (this.$il.breakpoints.gtlg) {
        slideUp({ delay: undefined, y: undefined }, this.$el as HTMLElement)
        Array.from(this.$el.querySelectorAll('.slide-up'))
          .forEach(el => {
            const { delay, y } = (el as HTMLElement).dataset
            slideUp({ delay, y }, el as HTMLElement)
          })
      }
      this.scrollTrigger = ScrollTrigger.create({
        trigger: this.$el,
        start: () => 'top-=50% bottom',
        end: () =>'bottom+=50% top',
        onToggle: (self: any) => {
          this.trigger = true
          self.kill()
          this.scrollTrigger = null
        }
      })
      parallax('papeterie', this.$el.querySelector('.parallax-pic') as HTMLElement)
      this.animationInitialized = true
    },
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
