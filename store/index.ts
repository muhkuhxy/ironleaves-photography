interface State {
  animationReady: boolean,
}

export const state = (): State => ({
  animationReady: false,
})

export const mutations = {
  animationReady(state: State, ready: boolean) {
    state.animationReady = ready
  }
}
