const actions = {
  setFileName: ({ commit }, newVal) => {
    return commit('set_fileName', newVal)
  },
  setMenuVisible: ({ commit }, newVal) => {
    return commit('set_menuVisible', newVal)
  },
  setMenuTag: ({ commit }, newVal) => {
    return commit('set_menuTag', newVal)
  },
  setDefaultFontSize: ({ commit }, newVal) => {
    return commit('set_defaultFontize', newVal)
  }
}
export default actions
