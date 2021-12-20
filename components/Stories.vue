<template>
  <SectionParent>
    <IconBase class="text-sunset w-full h-16 mt-8">
      <IconArrow />
    </IconBase>
    <LayoutSpacer />

    <SectionContent class="slide-up text-bluegray">
      <div class="flex flex-col lg:flex-row items-center md:gap-8">
        <figure class="slide-up lg:order-2 relative w-full sm:w-2/3 mb-12 pl-8 lg:pl-16" data-delay="0.3">
          <picture class="after:absolute after:inset-0 after:w-1/2 after:bg-gradient-to-r after:from-white">
            <source media="(max-width: 767px)" srcset="~/assets/images/mobile/ironleaves-photography-blog-mobile.jpg">
            <source media="(min-width: 768px)" srcset="~/assets/images/desktop/ironleaves-photography-blog.jpg">
            <img
              class="w-full object-cover"
              src="~/assets/images/desktop/ironleaves-photography-blog.jpg"
              alt="Tamara Loeffen Portrait">
          </picture>
          <SvgPetalFlower class="text-emerald fill-current w-[min(30%,7rem)] xl:w-32 absolute bottom-0 left-0 -mb-8 sm:-mb-12 lg:ml-6 rotate-[-20deg]"/>
        </figure>
        <div class="slide-up lg:order-1 lg:flex-initial max-w-prose lg:max-w-[none] lg:w-1/2 text-center lg:text-left">
          <SectionHeader>
            <template #roofline>Stories</template>
            Echte Emotionen
          </SectionHeader>
          <LayoutSpacer />
          <p>
            Hier gebe ich Euch einen Einblick in die wunderschönen Hochzeiten, die ich schon begleiten durfte. Außerdem spreche ich ein bisschen aus dem Nähkästchen und gebe Euch Tipps &amp; Tricks, wie ihr Eure Hochzeit am besten gestalten könnt, wie ich drauf bin und was hinter der Kamera so abläuft.
          </p>
          <LayoutSpacer />
          <NuxtLink to="/stories">
            <ButtonEffect class="text-sunset w-[fit-content] mx-auto lg:mx-0">
              Hier gibt's alle Beiträge
            </ButtonEffect>
          </NuxtLink>
        </div>
      </div>

      <LayoutSpacer :ms="5" />
      <SectionHeader class="text-center">
        Aktuellste Hochzeiten
      </SectionHeader>
    </SectionContent>

    <IlStory class="bg-dust" :slides="stories[0].slides">
      <template #image>
        <div class="relative w-[95%] lg:w-1/2 self-start lg:self-center flex-initial">
          <img
            class="w-7/8 border-8 border-solid border-white drop-shadow"
            :src="require(`~/assets/images/${stories[0].imgSrc}`)"
            :alt="stories[0].imgAlt">
          <SvgSingleBranch class="w-1/4 text-emerald fill-current absolute right-0 bottom-0 -translate-x-1 translate-y-4" />
        </div>
      </template>

      <template #title>
        <h2>{{ stories[0].title }}</h2>
      </template>

      <template #content>
        <NuxtContent :document="{ body: stories[0].excerpt }"></NuxtContent>

        <LayoutSpacer :ms="1" />

        <NuxtLink class="text-sunset mx-auto lg:mx-[unset]" :to="stories[0].path">
          <ButtonEffect>Hier geht's zur Story</ButtonEffect>
        </NuxtLink>
      </template>
    </IlStory>

    <LayoutSpacer :responsive="false" :ms="4" />

    <IlStory class="bg-dust" :slides="stories[1].slides">
      <template #image>
        <div class="relative lg:w-1/2 flex-initial lg:order-2">
          <img
            class="w-5/6 ml-auto border-8 border-solid border-white drop-shadow"
            :src="require(`~/assets/images/${stories[1].imgSrc}`)"
            :alt="stories[1].imgAlt">
          <SvgSingleFlower class="w-1/4 text-bluegray fill-current absolute left-0 bottom-0 translate-y-6 translate-x-4" />
        </div>
      </template>

      <template #title>
        <h2>{{ stories[1].title }}</h2>
      </template>

      <template #content>
        <NuxtContent :document="{ body: stories[1].excerpt }"></NuxtContent>

        <LayoutSpacer :ms="1" />

        <NuxtLink class="text-sunset mx-auto lg:mx-[unset]" :to="stories[1].path">
          <ButtonEffect>Hier geht's zur Story</ButtonEffect>
        </NuxtLink>
      </template>
    </IlStory>

    <LayoutSpacer :responsive="false" :ms="4" />

    <IlStory class="bg-dust" :slides="stories[2].slides">
      <template #image>
        <div class="relative lg:w-1/2 flex-initial">
          <img
            class="w-5/6 border-8 border-solid border-white drop-shadow"
            :src="require(`~/assets/images/${stories[2].imgSrc}`)"
            :alt="stories[2].imgAlt">
          <SvgFlowerSunset class="w-1/4 text-sunset fill-current absolute right-0 bottom-0 -translate-x-1 translate-y-3" />
        </div>
      </template>

      <template #title>
        <h2>{{ stories[2].title }}</h2>
      </template>

      <template #content>
        <NuxtContent :document="{ body: stories[2].excerpt }"></NuxtContent>

        <LayoutSpacer :ms="1" />

        <NuxtLink class="text-sunset mx-auto lg:mx-[unset]" :to="stories[2].path">
          <ButtonEffect>Hier geht's zur Story</ButtonEffect>
        </NuxtLink>
      </template>
    </IlStory>

    <LayoutSpacer :responsive="false" :ms="4" />

    <IconBase class="text-sunset w-full h-16 mt-8 mb-12">
      <IconArrow />
    </IconBase>

  </SectionParent>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    stories: {
      type: Array,
      required: true
    }
  },
})
</script>
