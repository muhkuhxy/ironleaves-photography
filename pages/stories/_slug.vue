<template>
  <SectionParent class="text-bluegray">
    <IlStory :slides="document.slides">
      <template #image>
        <div class="relative w-[95%] lg:w-1/2 self-start lg:self-center flex-initial">
          <img
            class="w-7/8 border-8 border-solid border-white drop-shadow"
            :src="require(`~/assets/images/${document.imgSrc}`)"
            :alt="document.imgAlt">
          <SvgSingleBranch class="w-1/4 text-emerald fill-current absolute right-0 bottom-0 -translate-x-1 translate-y-4" />
        </div>
      </template>

      <template #title>
        <SectionHeader>
          <template #roofline>{{ labels[document.tag] }}</template>
          {{ document.title }}
        </SectionHeader>
      </template>

      <template #content>
        <NuxtContent :document="{ body: document.excerpt }"></NuxtContent>
      </template>

      <template #telling>
        <SectionContent v-if="$il.breakpoints.gtlg" class="flex flex-row gap-12">
          <div class="h-[100vh] w-[50%] sticky top-0 flex gap-2">
            <div class="self-center flex flex-col gap-1">
              <div
                v-for="(dot,index) in document.storyTellingImgs"
                :key="`${dot}-dot`"
                class="rounded-[50%] border-4 border-bluegray transition-all duration-[.75s] cursor-pointer"
                :class="{ 'scale-[0.65]': !chaptersActive[index]}"
                @click="scrollToChapter(index)"></div>
            </div>
            <transition-group name="fade">
              <template v-for="(img, index) in document.storyTellingImgs">
                <img
                  v-show="chaptersActive[index]"
                  :key="img"
                  :src="require(`~/assets/images/${img}`)"
                  class="absolute left-[50%] top-[50%] translate-x-[calc(-50%+1rem)] translate-y-[-50%]"/>
              </template>
            </transition-group>
          </div>
          <div class="w-[40%] story-telling">
            <NuxtContent :document="tellingDocument"></NuxtContent>
          </div>
        </SectionContent>
      </template>
    </IlStory>
  </SectionParent>
</template>

<script lang="ts">
import Vue from 'vue'
import { FetchReturn } from '@nuxt/content/types/query-builder'
import { Context } from '@nuxt/types'
import { VueConstructor } from 'vue/types/vue'
import { labels } from '@/lib/blog'
import { ScrollTrigger } from '@/lib/gsap'
import { IlInjection } from '@/types/declarations'
import { dropWhile, splitAt } from '~/lib/collections'

interface Data {
  document?: FetchReturn
  animationInitialized: boolean
  chaptersActive: boolean[]
}

interface Child {
  tag?: string
  type?: string
}

interface Body {
  children: Child[]
}

export default (Vue as VueConstructor<Vue & IlInjection>).extend({
  inject: {
    $il: '$il'
  } as Record<keyof IlInjection, string>,
  async asyncData({ params, $content }: Context): Promise<{ document: FetchReturn}> {
      const slug = params.slug
      const document = await $content(`stories/${slug}`).fetch() as FetchReturn
      return { document }
  },
  data: () => ({
    animationInitialized: false,
    chaptersActive: []
  } as Data),
  computed: {
    labels() {
      return labels
    },
    tellingDocument() {
      if (this.document) {
        if (this.$il.breakpoints.gtlg) {
          // 2 columns -> wrap h2 and their paragraphs into 100vh containers
          const [, ...children] = (this.document.body as Body).children
          const splittedChildren = splitAt(children, el => el.tag === 'h2')
          // console.log({splittedChildren})
          const containerChildren = dropWhile(splittedChildren, el => el[0].tag !== 'h2')
            .map(children => ({
              tag: 'div',
              type: 'element',
              props: {
                class: 'chapter h-[100vh] flex flex-col justify-center'
              },
              children
            }))
          // console.log({containerChildren})
          return { body: { children: containerChildren } }
        } else {
          // put storyTellingImgs before/after h2s
        }
      }
      return { body: { children: [] } }
    },
  },
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
      // rerun this when viewport becomes bigger? or degrade gracefully
      if (this.$el.tagName && this.$il.breakpoints.gtlg) {
        this.$el.querySelectorAll('.story-telling .chapter').forEach((prose, index, array) => {
          const activate: ScrollTrigger.Callback = self => {
            this.$set(this.chaptersActive, index, self.isActive)
          }
          const onLeave = index === array.length - 1 ? undefined : activate
          const onLeaveBack = index === 0 ? undefined : activate
          ScrollTrigger.create({
            // markers: true,
            trigger: prose,
            start: index === 0 ? 'top bottom' : 'center bottom',
            end: 'center top',
            onEnter: activate,
            onLeave,
            onEnterBack: activate,
            onLeaveBack,
          })
        })
        this.animationInitialized = true
      }
    },
    scrollToChapter(index: number) {
      const chapter = this.$el.querySelector(`.story-telling .chapter:nth-child(${index+1})`)
      const coords = chapter?.getBoundingClientRect()
      coords && window.scrollTo({
        top: coords.top + window.scrollY,
        left: coords.left,
        behavior: 'smooth'
      })
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

.story-telling .chapter h2 {
  @apply mb-4
}

</style>
