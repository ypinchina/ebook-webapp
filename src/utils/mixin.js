import { mapGetters, mapActions } from 'vuex'
export const ebookMixin = {
  computed: {
    ...mapGetters(['fileName', 'menuVisible', 'menuTag', 'defaultFontSize'])
  },
  methods: {
    ...mapActions(['setFileName', 'setMenuVisible', 'setDefaultFontSize', 'setMenuTag'])
  }
}
