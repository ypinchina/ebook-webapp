const book = {
  fileName: state => state.book.fileName,
  menuVisible: state => state.book.menuVisible,
  menuTag: state => state.book.menuTag,
  defaultFontSize: state => state.book.defaultFontSize,
  getBook: state => state.book.book,
  defaultFontFamily: state => state.book.defaultFontFamily,
  fontFamilyVisible: state => state.book.fontFamilyVisible
}
export default book
