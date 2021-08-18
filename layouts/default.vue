<template>
  <div>
    <div class="bg-white text-bluegray z-50 sticky top-0">
      <nav class="max-w-screen-xl mx-auto px-4 flex justify-between md:py-4">
        <!-- <span class="md:hidden cursor-pointer">(TODO: Burger-Icon) Menü</span> -->
        <ul class="nav-links hidden md:flex justify-between gap-8">
          <NavLink v-for="link in links"
            :key="link.title"
            v-bind="link"
            @scrollTo="scrollTo" />
        </ul>
        <ul class="social-links hidden md:flex justify-between gap-2">
          <li v-for="link in social"
            :key="`social-link-${link}`">
            <IconBase :icon-name="link"
              class="w-6">
              <component :is="`Icon${link}`"/>
            </IconBase>
          </li>
        </ul>
      </nav>
    </div>
    <main>
      <Nuxt/>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
const links = [
  { title: 'Leidenschaft', target: 'passion' },
  { title: 'Über mich', target: 'about-me' },
  { title: 'Werte', target: 'candor' },
  { title: 'Bildlooks', target: 'looks' },
  { title: 'Stories', target: 'stories' },
  { title: 'Papeterie', target: 'papeterie' },
  { title: 'Kontakt', target: 'contact' }
]
const social = [
  'Facebook',
  'Instagram',
  'Pinterest',
  'Whatsapp',
  'Behance'
]
export default Vue.extend({
  computed: {
    links: () => links,
    social: () => social
  },
  methods: {
    scrollTo(clazz: String) {
      document.querySelector(`.scroll-target-${clazz}`)
        ?.scrollIntoView({ behavior: 'smooth' })
    }
  }
})
</script>
