import { mapGetters, mapActions } from 'vuex'
export const ebookMixin = {
  computed: {
    ...mapGetters(['fileName', 'menuVisible', 'menuTag', 'defaultFontSize', 'getBook', 'defaultFontFamily', 'fontFamilyVisible'])
  },
  methods: {
    ...mapActions(['setFileName', 'setMenuVisible', 'setDefaultFontSize', 'setMenuTag', 'setBook', 'setFontFamilyVisible', 'setDefaultFamily'])
  }
}
