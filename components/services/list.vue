<template>
  <SectionParent class="text-bluegray">
    <SectionContent :fluffy="true">
      <SectionHeader>
        <template #roofline>Übersicht</template>
        Infos für Euer Shooting mit mir
      </SectionHeader>
      <LayoutSpacer />

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-20">
        <div
          v-for="(chapter, index) in chapters"
          :key="`list-chapter-${index}`"
          class="space-y-4">
          <h2>{{ chapter.title }}</h2>
          <NuxtContent :document="{ body: chapter }" />
        </div>
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
