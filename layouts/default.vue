<template>
  <div>
    <div class="bg-white text-bluegray z-50 sticky top-0">
      <nav class="max-w-screen-xl mx-auto px-4 flex justify-between py-4">
        <ul class="nav-links flex justify-between">
          <NavLink v-for="link in links"
            :key="link.title"
            v-bind="link"
            @scrollTo="scrollTo" />
        </ul>
        <ul class="social-links flex justify-between">
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
  { title: 'Bildlooks', target: '' },
  { title: 'Stories', target: '' },
  { title: 'Papeterie', target: '' },
  { title: 'Kontakt', target: '' }
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

<style scoped>
.nav-links :not(:last-child) {
  margin-right: 2rem;
}
.social-links :not(:first-child) {
  margin-left: 0.5rem;
}
</style>

