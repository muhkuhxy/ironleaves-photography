<template>
  <div>
    <!-- scroll-target + data-section have to be inside the component,
    nuxt strips them for some reason -->
    <Passion />
    <AboutMe class="scroll-target" data-section="about-me" />
    <Candor class="scroll-target" data-section="candor" />
    <IlSpacer :responsive="false" :ms="4" />
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
  layout: 'IlLanding',
  data: () => ({
    gsapLoaded: false,
    gsapScrollTriggerLoaded: false
  }),
  head() {
    return {
      script: [
      {
          hid: 'gsap',
          src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js',
          defer: true,
          callback: () => { this.gsapLoaded = true },
        },
        {
          hid: 'gsap-scrolltrigger',
          src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/ScrollTrigger.min.js',
          defer: true,
          callback: () => { this.gsapScrollTriggerLoaded = true },
        }
      ]
    }
  },
  computed: {
    animationReady() {
      return this.gsapLoaded && this.gsapScrollTriggerLoaded
    }
  },
  watch: {
    animationReady(ready) {
      if (ready) {
        this.$nextTick(this.parallax)
      }
      this.$store.commit('animationReady', ready)
    }
  },
  methods: {
    parallax() {
      gsap.utils.toArray(".parallax-pic").forEach(img => {
        gsap.to(img, {
          ease: "none",
          scrollTrigger: {
            trigger: img,
            scrub: true,
            // markers: true,
            start: () => img.dataset.start || 'top bottom'
          },
          yPercent: 20
        })
      })
    }
  }
})
</script>
