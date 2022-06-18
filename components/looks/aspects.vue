<template>
  <SectionParent class="bg-dust text-bluegray">
    <SectionContent>
      <SectionHeader class="text-center">
        {{ document.title }}
      </SectionHeader>

      <IlStoryTelling
        :chapters="chapters"
      ></IlStoryTelling>
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
    chapters(): { children: Node[], img: string }[] {
      return splitChapters(this.document?.body as ElementNode)
        .map((children, index) => ({
          children,
          img: this.document?.imgs[index]
        }))
    },
  },
})
</script>
