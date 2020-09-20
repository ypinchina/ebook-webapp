const book = {
  fileName: state => state.book.fileName,
  menuVisible: state => state.book.menuVisible,
  menuTag: state => state.book.menuTag,
  defaultFontSize: state => state.book.defaultFontSize,
  getBook: state => state.book.book,
  defaultFontFamily: state => state.book.defaultFontFamily,
  fontFamilyVisible: state => state.book.fontFamilyVisible,
  defaultTheme: state => state.book.defaultTheme,
  bookAvailable: state => state.book.bookAvailable,
  progress: state => state.book.progress,
  locationObject: state => state.book.locationObject,
  section: state => state.book.section,
  cover: state => state.book.cover,
  metaData: state => state.book.metaData
}
export default book
