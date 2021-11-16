export type Breakpoints = Record<string, boolean>

export interface IlInjection {
  $il: {
    breakpoints: Breakpoints
  }
}
