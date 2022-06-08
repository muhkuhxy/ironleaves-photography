<template>
  <div
    class="bg-dust text-bluegray">
    <IconBase class="text-sunset w-full h-16 -translate-y-4">
      <IconArrow />
    </IconBase>

    <LayoutSpacer />

    <SectionHeader class="text-center">
      <template #roofline>Pakete</template>
      {{ document.title }}
    </SectionHeader>
    
    <IlStoryTelling
      :chapters="chapters"
    ></IlStoryTelling>
  </div>
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
          img: this.document?.packageImgs[index]
        }))
    },
  },
})
</script>