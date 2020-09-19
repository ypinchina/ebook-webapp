import { mapGetters, mapActions } from 'vuex'
export const ebookMixin = {
  computed: {
    ...mapGetters(['section', 'fileName', 'menuVisible', 'menuTag', 'defaultFontSize', 'getBook', 'defaultFontFamily', 'fontFamilyVisible', 'defaultTheme', 'bookAvailable', 'progress', 'locationObject'])
  },
  methods: {
    ...mapActions(['setSection', 'setFileName', 'setMenuVisible', 'setDefaultFontSize', 'setMenuTag', 'setBook', 'setFontFamilyVisible', 'setDefaultFamily', 'setDefaultTheme', 'setBookAvailable', 'setProgress', 'setLocationObject'])
  }
}
