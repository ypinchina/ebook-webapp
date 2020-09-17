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
  },
  setBook: ({ commit }, newObj) => {
    return commit('set_book', newObj)
  },
  setFontFamilyVisible: ({ commit }, newVal) => {
    return commit('set_fontFamilyVisible', newVal)
  },
  setDefaultFamily: ({ commit }, newVal) => {
    return commit('set_defaultFontFamily', newVal)
  },
  setDefaultTheme: ({ commit }, newVal) => {
    return commit('set_defaultTheme', newVal)
  }
}
export default actions
