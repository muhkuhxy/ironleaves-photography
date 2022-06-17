<template>
  <SectionContent class="flex gap-x-8 relative py-32 story-telling">
    <div
      v-show="breakpoints.gtlg"
      class="sticky hidden lg:flex flex-col gap-1 h-[100vh] top-0 left-0 justify-center items-center">
      <div
        v-for="(dot,index) in chapters"
        :key="`dot-${index}`"
        class="rounded-[50%] border-4 border-bluegray transition-all duration-[.75s] opacity-75"
        :class="chaptersActive[index] ? 'scale-[1.2] my-1' : 'scale-[0.65]'"/>
    </div>
    <transition-group
      v-show="breakpoints.gtlg"
      name="fade"
      class="sticky w-[60%] mr-8 h-[100vh] top-0"
      tag="div">
      <img
        v-for="(chapter,index) in chapters"
        v-show="chaptersActive[index]"
        :key="`sticky-chapter-img-${index}`"
        :src="require(`~/assets/images/${chapter.img}`)"
        class="absolute max-w-full max-h-[75vh] object-contain left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
    </transition-group>
    <div class="grow flex flex-col gap-y-32 lg:gap-y-0">
      <div
        v-for="(chapter, chapterIndex) in chapters"
        :key="`chapter-${chapterIndex}`"
        class="chapter flex flex-col lg:flex-row gap-y-4 gap-x-16 items-center lg:min-h-[100vh]">
        <div
          v-show="!breakpoints.gtlg"
          class="lg:w-[60%] lg:min-h-[100vh] lg:flex lg:items-center lg:justify-center">
          <img
            :src="require(`~/assets/images/${chapter.img}`)"
            class="max-h-[50vh] lg:max-h-[75vh] max-w-[100%] object-contain">
        </div>
        <NuxtContent
          class="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left"
          :document="{ body: chapter }"></NuxtContent>
      </div>
    </div>
  </SectionContent>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { retry } from '~/lib/functions'

interface Data {
  animationInitialized: boolean
  chaptersActive: boolean[]
}

export default Vue.extend({
  props: {
    chapters: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    animationInitialized: false,
    chaptersActive: [true],
  } as Data),
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
      if (this.$el.tagName) {
        retry(`StoryTelling chapter init`, 10, 500, () => {
          const chapters = this.$el.querySelectorAll('.story-telling .chapter')
          if (!chapters.length) {
            return false
          }
          chapters.forEach((chapter, index, array) => {
            const activate: ScrollTrigger.Callback = self => {
              this.$set(this.chaptersActive, index, self.isActive)
            }
            const onLeave = index === array.length - 1 ? undefined : activate
            const onLeaveBack = index === 0 ? undefined : activate
            ScrollTrigger.create({
              // markers: true,
              trigger: chapter,
              start: index === 0 ? 'top bottom' : 'center bottom',
              end: 'center top',
              onEnter: activate,
              onLeave,
              onEnterBack: activate,
              onLeaveBack,
            })
          })
          return true
        })
        this.animationInitialized = true
      }
    },
  },
})
</script>

<style lang="postcss" scoped>
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition-duration: .5s;
  transition-timing-function: ease-in-out;
}

.nuxt-content {
  & > * {
    @apply max-w-prose;
  }

  h2 {
    @apply leading-none mt-4;
  }
}
</style>
