<template>
  <SectionParent>
    <div class="bg-bluegray text-white overflow-y-hidden relative">
      <div class="relative lg:absolute lg:w-[50%] 2xl:w-[40%] lg:inset-y-0 lg:right-0">
        <IlFigure class="lg:w-full lg:h-full">
          <picture>
            <source media="(max-width: 767px)" srcset="assets/images/mobile/ironleaves-photography-papeterie-mobile.jpg">
            <source media="(min-width: 768px)" srcset="~/assets/images/desktop/ironleaves-photography-papeterie.jpg">
            <img
              class="parallax-pic object-cover w-full max-h-[75vh] lg:max-h-full lg:h-full scale-[1.3]"
              src="~/assets/images/desktop/ironleaves-photography-papeterie.jpg"
              alt="Individuelle Papeterie gestaltet mit Liebe zum Detail">
          </picture>
          <IlGradient direction="top-right" />
        </IlFigure>
        <IlFigureCaption class="lg:text-right lg:top-0 lg:left-0 lg:pt-12 lg:px-0 lg:ml-[-30%] z-10">
          Handmade<br>with love
        </IlFigureCaption>
      </div>
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
          <IlSpacer />
          <p class="max-w-prose mb-4">
            Egal was ihr braucht – ich helfe euch, ein individuelles Design zu entwickeln, was zu eurer Hochzeit passt. Dabei können wir eure Farben, Blumen und Deko einbeziehen. Wir finden gemeinsam euren Stil und ich gestalte die Save-the-Date-Karten, Einladungen, Menükarten und Sitzpläne nach euren Vorstellungen. Garantiert einzigartig und mit Liebe gemacht!
          </p>
          <p class="max-w-prose">
            In der ganzen Zeit kann ich euch bei euren Planungen unterstützen. Das gibt euch die Sicherheit, dass ihr nichts vergesst und ihr könnt eure Papeterie entspannt mir überlassen. Und falls ich euch sogar als Fotografin begleiten darf, können wir uns in Ruhe beschnuppern und kennenlernen.
          </p>
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
import { mapState } from 'vuex'
import { papeterie } from './slides'

let ScrollTrigger: any

declare global {
  // eslint-disable-next-line no-var
  var ScrollTrigger: any
}

export default Vue.extend({
  data: () => ({
    scrollTrigger: null as typeof ScrollTrigger,
    trigger: false,
  }),
  computed: {
    slides: () => papeterie,
    ...mapState(['animationReady'])
  },
  watch: {
    animationReady: {
      immediate: true,
      handler(ready) {
        if (ready) {
          this.initScrollTrigger()
        }
      }
    }
  },
  beforeDestroy() {
    this.scrollTrigger?.kill();
  },
  methods: {
    initScrollTrigger() {
      this.scrollTrigger = globalThis.ScrollTrigger.create({
        trigger: this.$el,
        start: () => 'top-=50% bottom',
        end: () =>'bottom+=50% top',
        onToggle: (self: any) => {
          this.trigger = true
          self.kill()
          this.scrollTrigger = null
        }
      })
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
