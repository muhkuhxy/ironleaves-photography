<template>
  <SectionContent ref="root" class="text-bluegray mt-[50vh]" :fluffy="true">
    <div
      data-animation="carousel"
      class="grid grid-rows-[4fr,1fr] grid-cols-4 justify-between gap-2 sm:block relative sm:h-[50vh] lg:h-[85vh] [perspective:3000px] [transform-style:preserve-3d]"
      @mouseenter="() => timeline && timeline.pause()"
      @mouseleave="() => timeline && timeline.play()">
      <div
          v-for="(img,index) in document.imgs"
          :key="index"
          data-animation="box"
          class="sm:absolute inset-0 inline-block [perspective:0] [transform-style:preserve-3d] md:scale-100 md:z-auto w-full sm:w-[50%] md:translate-x-0 h-full m-auto"
          :class="cssClasses[index]"
          >
          <div class="h-full origin-center">
            <img
              class="w-full h-full object-cover aspect-square sm:aspect-[1/3]"
              :src="require(`/assets/images/${img}`)">
          </div>
      </div>
    </div>

    <div class="max-w-prose mx-auto mt-[6rem] md:mt-[10rem]">
      <SectionHeader class="text-center">
        {{ document.title }}
      </SectionHeader>

      <LayoutSpacer />

      <NuxtContent :document="document" />
    </div>
  </SectionContent>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, useContext } from '@nuxtjs/composition-api'
import { useAnimations } from '~/composables/useAnimations'
import { useBreakpoints } from '~/composables/useBreakpoints'
import { Carousel3dTimeline } from '~/plugins/animations.client'

export default defineComponent({
  props: {
    document: {
      type: Object,
      required: true
    }
  },
  setup() {
    const { breakpointsReady, breakpoints } = useBreakpoints()
    const { $anim } = useContext()

    const timeline = ref<Carousel3dTimeline>()
    const root: Ref<Vue | null> = ref(null)

    const initAnimations = async () => {
      await breakpointsReady
      const $el = root.value?.$el as HTMLElement
      if (!breakpoints.gtmd) {
        if (timeline.value) {
          timeline.value?.kill()
          timeline.value = undefined
          $el.querySelectorAll('[data-animation=box]').forEach(box => {
            (box as HTMLElement).style.transform = '';
            ((box as HTMLElement).children[0] as HTMLElement).style.transform = ''
          })
        }
        return
      }
      const progress = timeline.value?.progress()
      timeline.value?.kill()
      timeline.value = $anim.carousel3d(
        $el.querySelector('[data-animation=carousel]') as HTMLElement,
        $el.querySelectorAll('[data-animation=box]'),
        {
          // paused: true,
          duration: breakpoints.gt2xl ? 30 : 20,
          progress,
        })
    }

    useAnimations(root, initAnimations)

    return { timeline, root, breakpoints, initAnimations }
  },
  computed: {
    cssClasses() {
      const front = 'sm:z-20 start-row-1 col-span-4'
      const middle = 'sm:scale-75 sm:z-10 row-start-2'
      const back = 'sm:scale-50 row-start-2'
      return {
        0: [back, 'sm:translate-x-[-75%]'],
        1: [middle, 'sm:translate-x-[-40%]'],
        2: [front],
        3: [middle, 'sm:translate-x-[40%]'],
        4: [back, 'sm:translate-x-[75%]'],
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.initAnimations)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.initAnimations)
  },
})
</script>
