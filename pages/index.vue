<template>
  <div>
    <Passion class="scroll-target-passion" />
    <AboutMe class="scroll-target-about-me" />
    <Candor class="scroll-target-candor" />
    <IlSpacer :ms="4" />
    <Looks class="scroll-target-looks" />
    <Stories class="scroll-target-stories" />
    <Papeterie class="scroll-target-papeterie" />
    <Packages class="scroll-target-packages" />
    <Contact class="scroll-target-contact" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  beforeRouteEnter(to, _, next) {
    next(vm => {
      if (to.query.go) {
        vm.$nuxt.$emit('scrollTo', to.query.go)
      }
    })
  },
})
</script>
