<template>
  <SectionParent class="text-bluegray relative">
    <SectionContent class="slide-up">
      <div class="slide-up lg:flex-initial max-w-prose lg:max-w-[none] lg:w-1/2">
        <SectionHeader>
          <template #roofline>Stories</template>
          Immer auf dem Laufenden
        </SectionHeader>
        <LayoutSpacer />
        <p>
          Erhaltet hier einen exklusiven Einblick in die wunderschönen Hochzeiten, die ich begleiten durfte! Außerdem gebe ich euch hilfreiche Tipps und Tricks, wie ihr Euren wichtigen Tag gestalten könnt und was ihr für Euren Hochzeitsfotografen beachten müsst.
        </p>
      </div>
      <LayoutSpacer />
      <ul class="flex justify-between">
        <li>Filter nach:</li>
        <li role="link" class="text-sunset uppercase underline font-bold">Stories</li>
        <li role="link" class="text-sunset uppercase">Informationen</li>
        <li role="link" class="text-sunset uppercase">Tipps &amp; Tricks</li>
        <li role="link" class="text-sunset uppercase">Lorem</li>
        <li role="link" class="text-sunset uppercase">Ipsum</li>
      </ul>
    </SectionContent>

    <div class="bg-dust">
      <transition-group
        tag="SectionContent"
        :css="false"
        class="grid grid-cols-2 place-content-center gap-x-12 gap-y-12">
        <div
          v-for="(item, index) in list"
          :key="item.value"
          class="story-card flex flex-col justify-center gap-6 bg-white text-center px-8 pt-4 pb-8 drop-shadow transition-all duration-700"
          :class="{ 'fade-out': item.removing }"
          @click="remove(index)">
          <h3 class="text-sunset uppercase -mb-2">Stories</h3>
          <img
              src="~/assets/images/stories/samira_kerem/ironleaves-photography-stories-samira-kerem.jpg"
              alt="">
            <h2 class="font-bold">Dings &amp; Bums</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, dolor sunt porro aliquam distinctio explicabo dignissimos amet excepturi. Amet animi culpa facere minima voluptatum, tempore totam dolorem aperiam aspernatur in!</p>
            <NuxtLink class="text-sunset mx-auto" :to="`stories/${item.value}`">
              <ButtonEffect>Hier geht's zur Story</ButtonEffect>
            </NuxtLink>
        </div>
      </transition-group>

</div>
  </SectionParent>
</template>

<script lang="ts">
import Vue from 'vue'
import { gsap } from '@/lib/gsap'

export default Vue.extend({
  data: () => ({
    list: [
        1,2,3,4,5
      ].map(value => ({value, removing: false}))
  }),
  methods: {
    remove(toRemove: number) {
      console.log('remove')
      this.list.forEach((item, index) => {
        item.removing = (item.value % 2) === 0
        // item.removing = toRemove === index
      })
      console.log('list updated')
      this.$nextTick(() => {
        gsap.to('.story-card.fade-out', {
          opacity: 0,
          duration: 1,
          ease: 'expo.out',
          onComplete: () => {
            console.log('onComplete')
            this.list = this.list.filter(x => !x.removing)
            console.log('done')
          }
        })
      })
    },
  },
})
</script>
