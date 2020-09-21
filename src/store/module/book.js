const book = {
  state: {
    fileName: '',
    menuVisible: false,
    menuTag: -1, // -1表示隐藏，0字体设置，1，主题设置，2进度设置 3.目录选择
    defaultFontSize: 16,
    book: {},
    defaultFontFamily: 'Default',
    fontFamilyVisible: false,
    defaultTheme: 0, // 默认的主题
    bookAvailable: false,
    progress: 0,
    locationObject: {},
    section: 0, // 目前阅读的章节
    cover: '', // 封面
    metaData: {}, // 作者信息，书本基础信息
    cfi: '' // 阅读进度
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
      state.defaultFontSize = newVal
    },
    set_book: (state, newObj) => {
      state.book = newObj
    },
    set_defaultFontFamily: (state, newVal) => {
      state.defaultFontFamily = newVal
    },
    set_fontFamilyVisible: (state, newVal) => {
      state.fontFamilyVisible = newVal
    },
    set_defaultTheme: (state, newVal) => {
      state.defaultTheme = newVal
    },
    set_bookAvailable: (state, newVal) => {
      state.bookAvailable = newVal
    },
    set_progress: (state, newVal) => {
      state.progress = newVal
    },
    set_locationObject: (state, newObj) => {
      state.locationObject = newObj
    },
    set_section: (state, newVal) => {
      state.section = newVal
    },
    set_cover: (state, newVal) => {
      state.cover = newVal
    },
    set_metaData: (state, newObj) => {
      state.metaData = newObj
    }
  }
}
export default book
