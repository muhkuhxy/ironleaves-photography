<template>
  <div>
    <Passion class="scroll-target" data-section="passion" />
    <AboutMe class="scroll-target" data-section="about-me" />
    <Candor class="scroll-target" data-section="candor" />
    <IlSpacer :ms="4" />
    <Looks class="scroll-target" data-section="looks" />
    <Stories class="scroll-target" data-section="stories" />
    <Papeterie class="scroll-target" data-section="papeterie" />
    <Packages class="scroll-target" data-section="packages" />
    <Contact class="scroll-target" data-section="contact" />
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  beforeRouteEnter(to, _, next) {
    next(vm => {
      if (to.query.go) {
        vm.$nuxt.$emit('scrollTo', to.query.go)
      }
    })
  }
})
</script>
