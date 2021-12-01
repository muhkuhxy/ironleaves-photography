import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@/tailwind.config.js'

export type Breakpoints = Record<string, boolean>

export interface IlInjection {
  $il: {
    breakpoints: Breakpoints,
    breakpointsReady: Promise<unknown>
  }
}

const fullConfig = resolveConfig(tailwindConfig)
export const breakpoints = Object.entries(fullConfig.theme.screens)
  .reduce((result, [breakpoint, value]) => {
    result[breakpoint] = parseInt(value, 10)
    return result
  }, {} as Record<string, number>)
