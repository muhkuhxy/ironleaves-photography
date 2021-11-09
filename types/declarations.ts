export interface Breakpoints {
  gtsm: boolean
  gtmd: boolean
  gtlg: boolean
  gtxl: boolean
  gt2xl: boolean
}

export interface IlInjection {
  $il: {
    breakpoints: Breakpoints
  }
}
