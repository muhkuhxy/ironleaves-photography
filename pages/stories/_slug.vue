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
        <SectionContent class="flex gap-x-8 relative py-32 story-telling">
          <div
            v-show="$il.breakpoints.gtlg"
            class="sticky hidden lg:flex flex-col gap-1 h-[100vh] top-0 left-0 justify-center items-center">
            <div
              v-for="(dot,index) in chapters"
              :key="`dot-${index}`"
              class="rounded-[50%] border-4 border-bluegray transition-all duration-[.75s] cursor-pointer opacity-75"
              :class="chaptersActive[index] ? 'scale-[1.2] my-1' : 'scale-[0.65]'"
              @click="scrollToChapter(index)"></div>
          </div>
          <transition-group
            v-show="$il.breakpoints.gtlg"
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
                v-show="!$il.breakpoints.gtlg"
                class="lg:w-[60%] lg:min-h-[100vh] lg:flex lg:items-center lg:justify-center">
                <img
                  :src="require(`~/assets/images/${chapter.img}`)"
                  class="max-h-[50vh] lg:max-h-[75vh] max-w-[100%] object-contain">
              </div>
              <NuxtContent
                :document="{ body: chapter }"></NuxtContent>
            </div>
          </div>
        </SectionContent>
      </template>
    </IlStory>

    <IconBase class="text-sunset w-full h-16 mt-8">
      <IconArrow />
    </IconBase>

    <LayoutSpacer />

    <SectionHeader class="mx-auto text-center">
      <template #roofline>Stories</template>
      Neueste Beiträge
    </SectionHeader>

    <LayoutSpacer />

    <BlogStories :articles="articles">
      <template #tail>
        <LayoutSpacer />

        <NuxtLink to="/stories">
          <ButtonEffect class="text-sunset w-[fit-content] mx-auto">
            Hier gibt's alle Beiträge
          </ButtonEffect>
        </NuxtLink>

        <LayoutSpacer :ms="4" />

        <IconBase class="text-sunset w-full h-16 mt-8 absolute bottom-0 -mb-10">
          <IconArrow />
        </IconBase>
      </template>
    </BlogStories>

    <Contact class="mt-20" />
  </SectionParent>
</template>

<script lang="ts">
import Vue from 'vue'
import { FetchReturn } from '@nuxt/content/types/query-builder'
import { Context } from '@nuxt/types'
import { VueConstructor } from 'vue/types/vue'
import { labels, fetchStories } from '@/lib/blog'
import { ScrollTrigger } from '@/lib/gsap'
import { IlInjection } from '@/types/declarations'
import { dropWhile, splitAt } from '@/lib/collections'

interface Data {
  document?: FetchReturn
  animationInitialized: boolean
  chaptersActive: boolean[]
  articles: FetchReturn[]
}

interface Node {
  tag?: string
  type?: string
  props?: Record<string, string>
  children: Node[]
}

export default (Vue as VueConstructor<Vue & IlInjection>).extend({
  inject: {
    $il: '$il'
  } as Record<keyof IlInjection, string>,
  scrollToTop: true,
  async asyncData({ params, $content }: Context): Promise<{ document: FetchReturn, articles: FetchReturn[]}> {
      const slug = params.slug
      const document = await $content(`stories/${slug}`).fetch() as FetchReturn
      const articles = await fetchStories({ $content }, { limit: 2, where: { slug: { $ne: slug } } })
      return { document, articles }
  },
  data: () => ({
    animationInitialized: false,
    chaptersActive: [true],
  } as unknown as Data),
  computed: {
    labels() {
      return labels
    },
    chapters(): { children: Node[], img: string }[] {
      if (!this.document) {
        return []
      }
      return dropWhile(
        splitAt((this.document.body as Node).children, el => el.tag === 'h2'),
          el => el[0].tag !== 'h2').map((children, index) => ({
            children,
            img: this.document?.storyTellingImgs[index]
          }))
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
      if (this.$el.tagName) {
        this.$el.querySelectorAll('.story-telling .chapter').forEach((chapter, index, array) => {
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

.nuxt-content {
  @apply flex flex-col gap-4 items-center lg:items-start text-center lg:text-left;

  & > * {
    @apply max-w-prose;
  }

  h2 {
    @apply leading-none mt-4;
  }
}

</style>
