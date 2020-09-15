const book = {
  state: {
    fileName: ''
  },
  mutations: {
    set_fileName: (state, newVal) => {
      state.fileName = newVal
    }
  },
  actions: {
    setFileName: ({ commit }, newVal) => {
      return commit('set_fileName', newVal)
    }
  }
}
export default book
