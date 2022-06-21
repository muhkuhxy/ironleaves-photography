import { ref, onMounted, onUpdated, Ref } from '@nuxtjs/composition-api'

export function useAnimations<T extends HTMLElement | Vue>(element: Ref<T | null>,
  callback: (el: T) => void) {
  const animationInitialized = ref(false)

  function initAnimations () {
    // console.log('init animations', element.value)
    if (!element.value) {
      return
    }
    callback(element.value)
    animationInitialized.value = true
  }

  onMounted(initAnimations)

  onUpdated(() => {
    if (!animationInitialized.value) {
      initAnimations()
    }
  })

  return { animationInitialized, initAnimations }
}
