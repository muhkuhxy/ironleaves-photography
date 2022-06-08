<template>
  <SectionParent>
    <SectionContent :fluffy="true">
      <SectionHeader class="text-bluegray">
        <template #roofline>Ihr wollt es doch auch wissen!</template>
        Häufige Fragen an mich
      </SectionHeader>
      <LayoutSpacer />
      <div class="flex flex-col divide-y border-white bg-bluegray text-white">
        <details 
          v-for="(chapter, index) in chapters"
          :key="index"
          class="p-4">
          <summary class="flex items-center justify-between text-xl font-bold cursor-pointer">
            {{ chapter.question }}
            <IlToggleArrow :open="false" />
          </summary>
          <NuxtContent class="mt-4" :document="{ body: chapter }" />
        </details>
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
    chapters(): { question: string | null, children: Node[] }[] {
      return splitChapters(this.document?.body as ElementNode).map(([question, ...children], index) => {
        return {
          question: question.type === 'element' && question.children[1]?.type === 'text' ? question.children[1].value : null,
          children
        }
      })
    }
  }
})
</script>
