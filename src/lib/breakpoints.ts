import Alpine from "alpinejs"

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
}

export const queries = Object.entries(breakpoints).reduce(
  (result, [key, value]) => {
    result[key] = window.matchMedia(`(min-width: ${value}px)`)
    return result
  },
  {} as Record<string, MediaQueryList>,
)

const activeBreakpoints = Object.entries(queries).reduce(
  (result, [key, value]) => {
    result[key] = value.matches
    return result
  },
  {} as Record<string, boolean>,
)

export const reactiveBreakpoints = Alpine.reactive(activeBreakpoints)

Object.entries(queries).forEach(([key, value]) => {
  value.addEventListener(
    "change",
    (e) => (reactiveBreakpoints[key] = e.matches),
  )
})
