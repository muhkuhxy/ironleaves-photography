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
        <SectionContent class="flex flex-row gap-x-12 gap-y-32 py-32">
          <div v-if="$il.breakpoints.gtlg" class="h-[100vh] w-[50%] sticky top-0 flex gap-2">
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
          <div class="max-w-prose lg:max-w-auto lg:w-[40%] story-telling mx-auto lg:mx-0 text-center lg:text-left">
            <NuxtContent :document="tellingDocument"></NuxtContent>
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

    <div class="bg-dust relative">
      <SectionContent class="relative grid grid-cols-2 auto-rows-[1fr] place-content-center gap-12">
        <div
          v-for="(article) in articles"
          :key="article.path"
          class="flex flex-col justify-center gap-6 bg-white text-center px-8 pt-4 pb-8 drop-shadow">
        <div class="text-sunset uppercase -mb-2">{{ labels[article.tag] }}</div>
        <img
            :src="require(`~/assets/images/${article.imgSrc}`)"
            :alt="article.imgAlt">
          <h2 class="font-bold">{{ article.title }}</h2>
          <NuxtContent class="grow" :document="{ body: article.excerpt }" />
          <NuxtLink class="text-sunset mx-auto" :to="article.path">
            <ButtonEffect>Hier geht's zur Story</ButtonEffect>
          </NuxtLink>
        </div>
      </SectionContent>

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
    </div>

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
  async asyncData({ params, $content }: Context): Promise<{ document: FetchReturn, articles: FetchReturn[]}> {
      const slug = params.slug
      const document = await $content(`stories/${slug}`).fetch() as FetchReturn
      const articles = await fetchStories({ $content }, { limit: 2, where: { slug: { $ne: slug } } })
      return { document, articles }
  },
  data: () => ({
    animationInitialized: false,
    chaptersActive: [],
  } as unknown as Data),
  computed: {
    labels() {
      return labels
    },
    tellingDocument() {
      if (this.document) {
        const chapters = dropWhile(
          splitAt((this.document.body as Node).children, el => el.tag === 'h2'),
          el => el[0].tag !== 'h2')
        if (this.$il.breakpoints.gtlg) {
          // 2 columns -> wrap h2 and their paragraphs into 100vh containers
          return {
            body: {
              children: chapters.map(children => ({
                tag: 'div',
                type: 'element',
                props: {
                  class: 'chapter h-[100vh] flex flex-col justify-center'
                },
                children
              }))
            }
          }
        } else {
          // put storyTellingImgs before h2s
          return {
            body: {
              children: chapters.map((children, index) => {
                children.splice(0, 0, {
                  tag: 'img',
                  type: 'element',
                  props: {
                    src: require(`~/assets/images/${this.document?.storyTellingImgs[index]}`),
                    class: 'max-w-[75%] max-h-[50vh]'
                  },
                  children: []
                })
                return {
                  tag: 'div',
                  type: 'element',
                  props: {
                    class: 'chapter flex flex-col items-center gap-4'
                  },
                  children
                }
              })
            }
          }
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
  @apply flex flex-col gap-32
}

.story-telling .chapter {
  h2 {
    @apply mt-4
  }
}

</style>
