import { mapGetters, mapActions } from 'vuex'
export const ebookMixin = {
  computed: {
    ...mapGetters(['section', 'fileName', 'cover', 'metaData', 'menuVisible', 'menuTag', 'defaultFontSize', 'getBook', 'defaultFontFamily', 'fontFamilyVisible', 'defaultTheme', 'bookAvailable', 'progress', 'locationObject'])
  },
  methods: {
    ...mapActions(['setSection', 'setFileName', 'setMetaData', 'setCover', 'setMenuVisible', 'setDefaultFontSize', 'setMenuTag', 'setBook', 'setFontFamilyVisible', 'setDefaultFamily', 'setDefaultTheme', 'setBookAvailable', 'setProgress', 'setLocationObject'])
  }
}
