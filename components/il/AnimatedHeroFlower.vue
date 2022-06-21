<template>
  <SvgHeroFlower ref="root" class="hero-flower" :class="staticClasses" />
</template>

<script lang="ts">
import { defineComponent, ref, Ref, toRefs, useContext } from '@nuxtjs/composition-api'
import { useAnimations } from '@/composables/useAnimations'
import { retry } from '@/lib/functions'
import { animateHeroFlower } from '@/lib/lottie'

export default defineComponent({
  props: {
    staticClasses: {
      type: String,
      required: true,
    },
    animatedClasses: {
      type: String,
      required: true
    },
  },
  setup(props) {
    const root: Ref<Vue | null> = ref(null)

    const { animatedClasses } = toRefs(props)
    const { $anim } = useContext()

    const { animationInitialized } = useAnimations(root, ({ $el }) => {
      const div = document.createElement('div')
      div.className = 'hero-flower animated ' + animatedClasses.value
      $el.replaceWith(div)
      setTimeout(() => retry('animateHeroFlower', 8, 250, () => {
        animateHeroFlower(div).setSpeed(0.7)
        $anim.ScrollTrigger.refresh()
        return true
      }), 0)
    })

    return { animationInitialized, root }
  }
})
</script>

<style lang="postcss" scoped>
.hero-flower {
  shape-outside: polygon(112.95% 2.53%, -6.32% -21.73%, 28.48% 35%, 37.24% 65.90%, 87.94% 101.47%);
}
</style>
