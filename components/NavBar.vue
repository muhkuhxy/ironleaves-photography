<template>
  <header class="bg-white text-bluegray z-50 sticky top-0 transform transition-all ease-in-out filter"
    :class="{
      '-translate-y-full delay-150': scrolledDown && !menuOpen,
      [`duration-${duration}`]: true,
      'drop-shadow-xl': !(scrolledDown && !menuOpen)
    }">
    <nav ref="nav"
      class="flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto p-4">
      <!-- TODO: button der zwischen burger und x toggelt -->
      <ButtonArrow class="md:hidden" @click="menuOpen = !menuOpen">Menü {{ menuOpen ? 'schließen' : '' }}</ButtonArrow>
      <div class="flex flex-col md:flex-row w-full justify-between md:h-full transform md:transform-none transition-all ease-in-out duration-300"
        :class="{'-translate-x-full h-0': !menuOpen, 'h-full': menuOpen}">
        <ul class="flex flex-col md:flex-row justify-between gap-4 lg:gap-8">
          <NavLink
            v-for="link in links"
            :key="link.title"
            v-bind="link"
            @scrollTo="scrollTo"
          />
        </ul>
        <div class="flex justify-end">
          <ul class="flex gap-2" :class="{'invisible md:visible': !menuOpen}">
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
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
let lastScrollY = 0
const links = [
  { title: 'Leidenschaft', target: 'passion' },
  { title: 'Über mich', target: 'about-me' },
  { title: 'Werte', target: 'candor' },
  { title: 'Bildlooks', target: 'looks' },
  { title: 'Stories', target: 'stories' },
  { title: 'Papeterie', target: 'papeterie' },
  { title: 'Kontakt', target: 'contact' },
]
const social = [
  { name: 'Facebook', url: 'https://facebook.com' },
  { name: 'Instagram', url: 'https://instagram.com/_ironleaves_' },
  { name: 'Pinterest', url: 'https://pinterest.com' },
  { name: 'Whatsapp', url: '' },
  { name: 'Behance', url: 'https://behance.net/ironleaves' },
]
export default Vue.extend({
  data: () => ({
    scrolledDown: false,
    menuOpen: false,
    duration: 500
  }),
  computed: {
    links: () => links,
    social: () => social,
  },
  watch: {
    menuOpen(opening) {
      if (opening) {
        (this.$refs.nav as HTMLElement).classList.toggle('gap-4', true);
      } else {
        window.setTimeout(() =>
          (this.$refs.nav as HTMLElement).classList.toggle('gap-4', false), this.duration)
      }
    }
  },
  mounted() {
    document.addEventListener('scroll', this.onScroll)
  },
  methods: {
    scrollTo(clazz: String) {
      if (this.menuOpen) {
        this.menuOpen = false;
      }
      document
        .querySelector(`.scroll-target-${clazz}`)
        ?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    },
    onScroll() {
      this.scrolledDown = window.scrollY > lastScrollY
      lastScrollY = window.scrollY
    }
  }
})
</script>
