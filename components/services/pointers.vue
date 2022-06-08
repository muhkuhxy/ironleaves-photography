<template>
  <SectionParent>
    <SectionContent
      class="grid grid-cols-2 text-emerald gap-16">
      <div class="col-start-1">
        <h2 class="mb-8 leading-[1.1]">{{ document.title }}</h2>
        <NuxtContent :document="{ body: document.excerpt }"></NuxtContent>
      </div>
      
      <div class="col-start-2">
        <ol class="list-decimal list-inside flex flex-col gap-12">
          <li
            v-for="(chapter, index) in chapters"
            :key="index"
             class="marker:text-sunset marker:playfair marker:font-bold">
            <span class="text-sunset playfair font-bold">{{ chapter.title}}</span>
            <br>
            <NuxtContent class="mt-4 pl-12" :document="{ body: chapter }"></NuxtContent>
          </li>
        </ol>
      </div>
    </SectionContent>
  </SectionParent>
</template>

<script lang="ts">
import Vue from 'vue'
import { splitChapters, Node, ElementNode } from '@/lib/content'

export default Vue.extend({
  props: {
    document: {
      type: Object,
      required: true
    }
  },
  computed: {
    chapters(): { title: string | null, children: Node[] }[] {
      return splitChapters(this.document?.body as ElementNode).map(([title, ...children]) => {
        return {
          title: title.type === 'element' && title.children[1]?.type === 'text' ? title.children[1].value : null,
          children
        }
      })
    }
  }
})
</script>