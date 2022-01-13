<template>
  <div>
    <!-- scroll-target + id have to be inside the component,
    nuxt strips them for some reason -->
    <Passion />
    <AboutMe id="about-me" class="scroll-target" />
    <Candor id="candor" class="scroll-target" />
    <LayoutSpacer :responsive="false" :ms="4" />
    <Looks id="looks" class="scroll-target" />
    <Stories id="stories" class="scroll-target" :stories="stories" />
    <Papeterie id="papeterie" class="scroll-target" />
    <Packages id="packages" class="scroll-target" />
    <Contact id="contact" class="scroll-target" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import { FetchReturn } from '@nuxt/content/types/query-builder'
import { fetchStories } from '@/lib/blog'
import { ScrollTrigger } from '@/lib/gsap'

export default Vue.extend({
  // @ts-ignore
  layout: 'landing',
  async asyncData(context: Context) {
    const stories = await fetchStories(context, {
      tag: 'stories',
      limit: 3,
      only: ['excerpt', 'slides', 'imgSrc', 'imgAlt', 'path', 'title']
    }) as FetchReturn[]
    return { stories }
  },
  mounted() {
    this.$nuxt.$on('grow', () => {
      this.$nextTick(ScrollTrigger.refresh)
    })
  },
})
</script>
