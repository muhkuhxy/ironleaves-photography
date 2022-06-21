<template>
  <SectionParent ref="root" class="bg-emerald text-white lg:relative overflow-y-hidden">
    <IlFigure class="slide-up lg:absolute lg:w-[50%] 2xl:w-[40%] lg:inset-y-0 lg:left-0" data-delay="0.3">
      <picture>
        <source media="(max-width: 767px)" srcset="~/assets/images/mobile/ironleaves-photography-bildlooks-mobile.jpg">
        <source media="(min-width: 768px)" srcset="~/assets/images/desktop/ironleaves-photography-bildlooks.jpg">
        <img
          ref="parallax"
          class="parallax-pic object-cover w-full max-h-[75vh] lg:max-h-full lg:h-full translate-y-[-10%] scale-[1.23]"
          alt="Paarshooting im Freien">
      </picture>
      <IlGradient :half-height="true" class="translate-y-px" />
    </IlFigure>
    <SectionLines class="slide-up xl:block" data-y="0" data-delay="1">
      <SvgHeroLine2 class="absolute text-sunset opacity-75 stroke-current stroke-2 fill-none h-full 2xl:h-[124%] 2xl:top-[-16%] ml-[42%] 2xl:ml-[31%] 2xl:rotate-[24deg]" />
    </SectionLines>
    <SectionContent>
      <SvgThreeStraws class="fill-current float-right lg:float-none w-[28%] md:w-1/4 lg:w-auto lg:h-[60%] relative lg:absolute right-0 lg:bottom-0 lg:right-0 -mt-48 md:-mt-56 lg:mt-0 -mr-6 lg:mr-[45%] 2xl:mr-[55%] mb-8 lg:-mb-4 ml-4 lg:pr-8" />
      <div class="slide-up lg:py-24 lg:ml-[55%] 2xl:ml-[45%]">
        <SectionHeader>
          <template #roofline>Bildlooks</template>
          Die Welt ist bunt &ndash; und ihr seid es auch!
        </SectionHeader>
        <LayoutSpacer />
        <p class="max-w-prose mb-4">
          Optional könnt ihr die Bildbearbeitung und die Anmutung Eurer Fotos mitbestimmen.
        </p>
        <IlTextExpander class="items-start">
          <p>
            Eure Fotos sollen Euch und Euren Charakter widerspiegeln und Eure Hochzeit genau so wiedergeben, wie ihr sie in Erinnerung habt. Mögt ihr rustikale, dunkle und warme Bilder? Oder doch reduziert, hell und clean? Moody oder leuchtend? Zeitlos oder modern? Sucht Euch unter unterschiedlichen Atmosphären genau den Look aus, der am besten zu Euch passt!
          </p>
        </IlTextExpander>
      </div>
    </SectionContent>
  </SectionParent>
</template>

<script setup lang="ts">
import { ref, Ref, useContext } from '@nuxtjs/composition-api'
import { useAnimations } from '@/composables/useAnimations'
import { useBreakpoints } from '@/composables/useBreakpoints'

const root: Ref<Vue | null> = ref(null)
const parallax: Ref<HTMLElement | null> = ref(null)

const { $anim } = useContext()

const { breakpoints, breakpointsReady } = useBreakpoints()

useAnimations(root, async () => {
  await breakpointsReady
  const $el = root.value?.$el as HTMLElement
  if (breakpoints.gtlg) {
    $anim.slideUp({ delay: undefined, y: undefined }, $el)
    Array.from($el.querySelectorAll('.slide-up'))
      .forEach(el => {
        const { delay, y } = (el as HTMLElement).dataset
        $anim.slideUp({ delay, y }, el as HTMLElement)
      }
    )
  }
  $anim.parallax('looks', parallax.value)
})
</script>
