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
  },
  setBookAvailable: ({ commit }, newVal) => {
    return commit('set_bookAvailable', newVal)
  },
  setProgress: ({ commit }, newVal) => {
    return commit('set_progress', newVal)
  },
  setSection: ({ commit }, newObj) => {
    return commit('set_section', newObj)
  },
  setCover: ({ commit }, newObj) => {
    return commit('set_cover', newObj)
  },
  setMetaData: ({ commit }, newObj) => {
    return commit('set_metaData', newObj)
  }
}
export default actions
