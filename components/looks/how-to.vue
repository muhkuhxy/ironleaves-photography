<template>
  <SectionParent>
    <SectionContent class="bg-bluegray text-white">
      <div class="max-w-prose mx-auto text-center">
        <SectionHeader>
          <template #roofline>
            <span class="text-white">{{ document.roofline }}</span>
          </template>
          {{ document.title }}
        </SectionHeader>

        <LayoutSpacer />

        <NuxtContent class="max-w-prose mx-auto space-y-4" :document="document"></NuxtContent>
      </div>
    </SectionContent>
  </SectionParent>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    document: {
      type: Object,
      required: true
    }
  },
})
</script>
