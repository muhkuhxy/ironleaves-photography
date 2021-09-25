<template>
  <header class="bg-white text-bluegray z-50 sticky top-0 transform transition-all ease-in-out duration-500 filter"
    :class="[scrolledDown && (!menuShown || gtMd) ?
      '-translate-y-full delay-150' :
      'drop-shadow-xl']">
    <nav class="relative">
      <IlContainer v-if="ltMd" class="relative z-20 bg-white flex justify-between py-4">
        <button type="button" @click="menuShown = !menuShown">
          <SvgBurger class="w-6 inline mr-2 fill-current" :open="menuShown" />
          Menü
        </button>
        <a v-for="{ name, url } in social" :key="`social-link-${name}-md`"
          :href="url" target="_blank">
          <IconBase :icon-name="name" class="w-6">
            <component :is="`Icon${name}`" />
          </IconBase>
        </a>
      </IlContainer>
      <transition name="slide">
        <IlContainer v-if="menuShown || gtMd"
          :retractable="true" class="absolute md:static bg-white pb-4 md:pt-4 flex flex-col md:flex-row justify-between">
          <ul class="grid md:flex justify-between gap-4 md:gap-3 lg:gap-8"
            :class="{
              'grid-cols-2 grid-rows-4 grid-flow-col': ltMd,
            }">
            <li
              v-for="{title, target} in links"
              :key="title"
              class="cursor-pointer"
              @click="scrollTo(target)">{{ title }}</li>
          </ul>
          <div v-if="gtMd" class="flex justify-end">
            <ul class="flex gap-2">
              <li v-for="{ name, url } in social" :key="`social-link-${name}`">
                <a :href="url" target="_blank">
                  <IconBase :icon-name="name" class="w-6">
                    <component :is="`Icon${name}`" />
                  </IconBase>
                </a>
              </li>
            </ul>
          </div>
        </IlContainer>
      </transition>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@/tailwind.config.js'

let lastScrollY = 0
const links = [
  { title: 'Leidenschaft', target: 'passion' },
  { title: 'Über mich', target: 'about-me' },
  { title: 'Werte', target: 'candor' },
  { title: 'Bildlooks', target: 'looks' },
  { title: 'Stories', target: 'stories' },
  { title: 'Papeterie', target: 'papeterie' },
  { title: 'Pakete', target: 'packages' },
  { title: 'Kontakt', target: 'contact' },
]
const social = [
  // { name: 'Facebook', url: 'https://facebook.com' },
  { name: 'Instagram', url: 'https://instagram.com/_ironleaves_' },
  // { name: 'Pinterest', url: 'https://pinterest.com' },
  // { name: 'Whatsapp', url: '' },
  // { name: 'Behance', url: 'https://behance.net/ironleaves' },
]
const fullConfig = resolveConfig(tailwindConfig)
const breakpointMd = parseInt(fullConfig.theme.screens.md, 10)

export default Vue.extend({
  data: () => ({
    scrolledDown: false,
    menuShown: false,
    gtMd: false,
  }),
  computed: {
    links: () => links,
    social: () => social,
    ltMd(): boolean {
      return !this.gtMd
    }
  },
  mounted() {
    this.updateBreakpoint()
    window.addEventListener('resize', this.updateBreakpoint)
    document.addEventListener('scroll', this.onScroll)
  },
  methods: {
    scrollTo(clazz: string) {
      if (this.menuShown) {
        this.menuShown = false;
      }
      this.$emit('scrollTo', clazz)
    },
    onScroll() {
      this.scrolledDown = window.scrollY > 100 && window.scrollY > lastScrollY
      lastScrollY = window.scrollY
    },
    updateBreakpoint() {
      this.gtMd = window.innerWidth >= breakpointMd
    }
  }
})
</script>

<style lang="postcss" scoped>
.slide-enter-active, .slide-leave-active {
  transition: all .3s ease-in-out;
}
.slide-enter, .slide-leave-to {
  transform: translate3d(0, -100%, 0);
}
</style>
