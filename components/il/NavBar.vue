<template>
  <header
    v-click-outside="clickOutside"
    class="bg-white text-bluegray z-40 sticky top-0 transform-gpu transition-all ease-in-out duration-500 filter"
    :class="[scrolledDown && (!menuShown || gtMd) ?
      '-translate-y-full delay-150' :
      'drop-shadow-xl']">
    <nav>
      <IlContainer v-if="ltMd" class="relative z-20 bg-white flex justify-between py-4">
        <button type="button" @click="menuShown = !menuShown">
          <SvgBurger class="w-6 inline mr-2 fill-current" :open="menuShown" />
          Menü
        </button>
        <a
          v-for="{ name, url } in social" :key="`social-link-${name}-md`"
          :href="url" target="_blank">
            <component :is="`Svg${name}`" :title="name" class="fill-current w-6" />
        </a>
      </IlContainer>
      <transition name="slide">
        <IlContainer
          v-if="menuShown || gtMd"
          :retractable="true"
          class="bg-white pb-4 md:pt-4 lg:grid grid-cols-[1fr,auto,1fr] gap-3.5 lg:gap-8">
          <hr class="mb-4 col-span-2 lg:hidden">
          <ul
            class="col-span-3 md:col-span-1 md:col-start-2 grid md:flex justify-center gap-3.5 lg:gap-8"
            :class="{
              'grid-cols-2 grid-rows-4 grid-flow-col': ltMd,
            }">
            <li
              v-for="{title, target} in links"
              :key="title"
              class="cursor-pointer nav-link relative after:h-0 md:after:h-px after:bg-bluegray"
              @click="scrollTo(target)">
              {{ title }}
            </li>
          </ul>
          <ul class="col-start-3 justify-self-end">
            <li
              v-for="{ name, url } in social" :key="`social-link-${name}`"
              class="justify-self-end hidden md:block">
              <a :href="url" target="_blank">
                <component :is="`Svg${name}`" :title="name" class="fill-current w-6" />
              </a>
            </li>
          </ul>
        </IlContainer>
      </transition>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { VueConstructor } from 'vue/types/vue'
import { IlInjection } from '@/types/declarations'

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

export default (Vue as VueConstructor<Vue & IlInjection>).extend({
  inject: {
    $il: '$il'
  } as Record<keyof IlInjection, string>,
  data: () => ({
    scrolledDown: false,
    menuShown: false,
  }),
  computed: {
    links: () => links,
    social: () => social,
    gtMd(): boolean {
      return this.$il.breakpoints.gtmd
    },
    ltMd(): boolean {
      return !this.gtMd
    }
  },
  mounted() {
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
      this.scrolledDown = window.scrollY > 400 && window.scrollY > lastScrollY
      lastScrollY = window.scrollY
    },
    clickOutside() {
      if (this.menuShown) {
        this.menuShown = false
      }
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

.nav-link {
  &::after {
    position: absolute;
    bottom: 3px;
    width: 0;
    left: 0;
    transition: all .3s ease-out;
  }

  &:hover::after {
    width: 100%;
  }
}
</style>
