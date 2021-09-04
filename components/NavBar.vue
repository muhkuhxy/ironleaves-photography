<template>
  <header class="bg-white text-bluegray z-50 sticky top-0 transform transition-all ease-in-out duration-500 filter"
    :class="{
      '-translate-y-full delay-150': scrolledDown && (!menuShown || gtMd),
      'drop-shadow-xl': !(scrolledDown && (!menuShown || gtMd))
    }">
    <nav class="relative">
      <!-- TODO: button der zwischen burger und x toggelt -->
      <div v-if="!gtMd" class="relative z-20 bg-white p-4 flex w-full justify-between">
        <ButtonArrow @click="menuShown = !menuShown">Menü {{ menuShown ? 'schließen' : '' }}</ButtonArrow>
        <a v-for="{ name, url } in social" :key="`social-link-${name}-md`"
          :href="url" target="_blank">
          <IconBase :icon-name="name" class="w-6">
            <component :is="`Icon${name}`" />
          </IconBase>
        </a>
      </div>
      <transition name="slide">
        <div v-if="menuShown || gtMd" class="absolute md:static bg-white px-4 pb-4 md:pt-4 flex flex-col md:flex-row w-full justify-between">
          <ul class="grid md:flex justify-between gap-4 lg:gap-8"
            :class="{
              'grid-cols-2 grid-rows-5 grid-flow-col': !gtMd,
            }">
            <NavLink
              v-for="link in links"
              :key="link.title"
              v-bind="link"
              @scrollTo="scrollTo"
            />
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
        </div>
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
  },
  mounted() {
    this.gtMd = window.innerWidth >= breakpointMd
    window.addEventListener('resize', () => {
      this.gtMd = window.innerWidth >= breakpointMd
    } )
    document.addEventListener('scroll', this.onScroll)
  },
  methods: {
    scrollTo(clazz: String) {
      if (this.menuShown) {
        this.menuShown = false;
      }
      document
        .querySelector(`.scroll-target-${clazz}`)
        ?.scrollIntoView({ behavior: 'smooth' })
    },
    onScroll() {
      this.scrolledDown = window.scrollY > 100 && window.scrollY > lastScrollY
      lastScrollY = window.scrollY
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
