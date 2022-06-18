<template>
  <SectionParent>
    <SectionContent class="slide-up text-bluegray">
      <div class="flex flex-col lg:flex-row items-center md:gap-8">
        <figure class="slide-up lg:order-2 relative w-full sm:w-2/3 mb-12 pl-8 lg:pl-16" data-delay="0.3">
          <picture class="after:absolute after:inset-0 after:w-1/2 after:bg-gradient-to-r after:from-white">
            <source media="(max-width: 767px)" srcset="~/assets/images/mobile/ironleaves-photography-blog-mobile.jpg">
            <source media="(min-width: 768px)" srcset="~/assets/images/desktop/ironleaves-photography-blog.jpg">
            <img
              class="w-full object-cover"
              src="~/assets/images/desktop/ironleaves-photography-blog.jpg"
              alt="Tamara und Timon">
          </picture>
          <SvgPetalFlower class="text-emerald fill-current w-[min(30%,7rem)] xl:w-32 absolute bottom-0 left-0 -mb-8 sm:-mb-12 lg:ml-6 rotate-[-20deg]"/>
        </figure>
        <div class="slide-up lg:order-1 lg:flex-initial max-w-prose lg:max-w-[none] lg:w-1/2 text-center lg:text-left">
          <SectionHeader>
            <template #roofline>{{ document.roofline }}</template>
            {{ document.title }}
          </SectionHeader>
          <LayoutSpacer />
          <NuxtContent class="max-w-prose space-y-4" :document="document"></NuxtContent>
        </div>
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

