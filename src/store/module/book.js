const book = {
  state: {
    fileName: '',
    menuVisible: false,
    menuTag: -1, // -1表示隐藏，0字体设置，1，主题设置，2进度设置 3.目录选择
    defaultFontSize: 16
  },
  mutations: {
    set_fileName: (state, newVal) => {
      state.fileName = newVal
    },
    set_menuVisible: (state, newVal) => {
      state.menuVisible = newVal
    },
    set_menuTag: (state, newVal) => {
      state.menuTag = newVal
    },
    set_defaultFontize: (state, newVal) => {
      state.menuTag = newVal
    }
  }
}
export default book
