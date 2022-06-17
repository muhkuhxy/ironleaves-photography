import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@/tailwind.config.js'

export interface Breakpoints {
  gtsm: boolean
  gtmd: boolean
  gtlg: boolean
  gtxl: boolean
  gt2xl: boolean
}

export interface State {
 breakpoints: Breakpoints
}

let breakpointsReady: () => void
const promise = new Promise<void>(resolve => {
  breakpointsReady = resolve
})

export function state(): State {
  return {
    breakpoints: {
      gtsm: false,
      gtmd: false,
      gtlg: false,
      gtxl: false,
      gt2xl: false,
    },
  }
}

export const getters = {
  breakpoints: (state: State) => state.breakpoints,
}

export type BK = keyof Breakpoints

const fullConfig = resolveConfig(tailwindConfig)
const tailwindBreakpoints = Object.entries(fullConfig.theme.screens)
  .reduce((result, [breakpoint, value]) => {
    result[breakpoint] = parseInt(value, 10)
    return result
  }, {} as Record<string, number>)

export const mutations = {
  updateBreakpoints(state: State) {
    Object.entries(tailwindBreakpoints)
      .reduce((result, [breakpoint, value]) => {
        const rawKey = `gt${breakpoint}`
        if (rawKey in result) {
          const safeKey = rawKey as BK
          result[safeKey] = window.innerWidth >= value
        }
        return result
      }, state.breakpoints)
    breakpointsReady()
  }
}

export const actions = {
  breakpointsReady() {
    return promise
  }
}
