interface State {
  animationReady: boolean,
  gsap: any
}

export const state = (): State => ({
  animationReady: false,
  gsap: null
})

export const mutations = {
  animationReady(state: State, { ready, gsap }: { ready: boolean, gsap: any }) {
    state.animationReady = ready
    state.gsap = gsap
  }
}
