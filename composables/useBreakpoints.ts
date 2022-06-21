import { useStore } from '@nuxtjs/composition-api'
import { Breakpoints } from '~/store/breakpoints'

export function useBreakpoints() {
  const store = useStore()
  const breakpointsReady: Promise<unknown> = store.dispatch('breakpoints/breakpointsReady')
  const breakpoints: Breakpoints = store.getters['breakpoints/breakpoints']
  return {
    breakpointsReady,
    breakpoints
  }
}
