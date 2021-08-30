<template>
  <div>
    <Hero class="scroll-target-top" />
    <Passion class="scroll-target-passion" />
    <AboutMe class="scroll-target-about-me" />
    <Candor class="scroll-target-candor" />
    <IlSpacer :m="4" />
    <Looks class="scroll-target-looks" />
    <Stories class="scroll-target-stories" />
    <div class="scroll-target-papeterie">Papeterie</div>
    <Contact class="scroll-target-contact" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
