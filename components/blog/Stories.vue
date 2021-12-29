<template>
  <div class="bg-dust relative">
    <SectionContent>
      <div v-if="!articles.length && !loading" class="text-center transition-all">
        Sorry, dazu gibt's bislang noch keine Stories.
      </div>
      <transition-group
        tag="div"
        name="fade"
        class="relative grid grid-cols-1 md:grid-cols-2 md:auto-rows-[1fr] place-content-center gap-12"
        @after-leave="$emit('loading', false)">
        <div
          v-for="(article) in articles"
          :key="article.path"
          :data-tag="article.tag"
          class="flex flex-col justify-center gap-6 bg-white text-center px-8 pt-4 pb-8 drop-shadow cursor-pointer"
          @click="$router.push(article.path)">
          <div class="text-sunset uppercase -mb-2">{{ labels[article.tag] }}</div>
          <img
              :src="require(`~/assets/images/${article.imgSrc}`)"
              :alt="article.imgAlt">
            <h2 class="font-bold">{{ article.title }}</h2>
            <NuxtContent class="grow" :document="{ body: article.excerpt }" />
            <NuxtLink class="text-sunset mx-auto" :to="article.path">
              <ButtonEffect>Hier geht's zur Story</ButtonEffect>
            </NuxtLink>
        </div>
      </transition-group>
    </SectionContent>

    <slot name="tail"></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { labels } from '@/lib/blog'

export default Vue.extend({
  props: {
    articles: {
      type: Array,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    labels
  })
})
</script>

<style lang="postcss" scoped>
.fade-enter-active, .fade-leave-active, .fade-move {
  transition: all 0.75s ease-out;
}

.fade-leave-active {
  position: absolute;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
