export const state = () => ({
  animationReady: false
})

export const mutations = {
  animationReady(state, ready) {
    state.animationReady = ready
  }
}
