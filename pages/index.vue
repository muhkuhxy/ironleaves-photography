<template>
  <div>
    <Hero class="scroll-target-top" />
    <Passion class="scroll-target-passion" />
    <AboutMe class="scroll-target-about-me" />
    <Candor class="scroll-target-candor" />
    <IlSpacer :ms="4" />
    <Looks class="scroll-target-looks" />
    <Stories class="scroll-target-stories" />
    <Papeterie class="scroll-target-papeterie" />
    <Contact class="scroll-target-contact" />
    <!-- TODO -->
    <div class="scroll-target-packages">Pakete</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
