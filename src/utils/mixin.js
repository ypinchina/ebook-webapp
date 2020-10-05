import { mapGetters, mapActions } from 'vuex'
import { setUserHabit } from './storage'
export const ebookMixin = {
  computed: {
    ...mapGetters(['section', 'fileName', 'cover', 'metaData', 'menuVisible', 'menuTag', 'defaultFontSize', 'getBook', 'defaultFontFamily', 'fontFamilyVisible', 'defaultTheme', 'bookAvailable', 'progress', 'catalog'])
  },
  methods: {
    ...mapActions([
      'setSection',
      'setFileName',
      'setMetaData',
      'setCover',
      'setMenuVisible',
      'setDefaultFontSize',
      'setMenuTag',
      'setBook',
      'setFontFamilyVisible',
      'setDefaultFamily',
      'setDefaultTheme',
      'setBookAvailable',
      'setProgress',
      'setCatalog'
    ]),
    refleshProgress () {
      const currentLocation = this.getBook.rendition.currentLocation()
      if (this.getBook.locations && currentLocation.start) {
        setUserHabit(this.fileName, 'lastLocation', currentLocation)
        this.setSection(currentLocation.start.index)
        this.setProgress(Math.round(this.getBook.locations.percentageFromCfi(currentLocation.start.cfi) * 100))
      }
    },
    addCss (href) {
      const html = document.documentElement
      const head = html.querySelector('head')
      const linkTag = document.createElement('link')
      linkTag.setAttribute('rel', 'stylesheet')
      linkTag.setAttribute('type', 'text/css')
      linkTag.setAttribute('href', href)
      head.appendChild(linkTag)
    },
    addThemeLink (index) {
      this.removeAllCss()
      switch (index) {
        case 0:
          this.addCss(process.env.VUE_APP_DEV_URL + '/theme/theme_default.css')
          break
        case 1:
          this.addCss(process.env.VUE_APP_DEV_URL + '/theme/theme_gold.css')
          break
        case 2:
          this.addCss(process.env.VUE_APP_DEV_URL + '/theme/theme_eye.css')
          break
        case 3:
          this.addCss(process.env.VUE_APP_DEV_URL + '/theme/theme_night.css')
          break
        default:
          this.addCss(process.env.VUE_APP_DEV_URL + '/theme/theme_eye.css')
      }
    },
    removeCss (href) {
      const links = document.querySelectorAll('link')
      for (let i = links.length; i >= 0; i--) {
        const link = links[i]
        if (link && link.getAttribute('href') && link.getAttribute('href') === href) {
          link.parentNode.removeChild(link)
        }
      }
    },
    removeAllCss () {
      this.removeCss(process.env.VUE_APP_DEV_URL + '/theme/theme_default.css')
      this.removeCss(process.env.VUE_APP_DEV_URL + '/theme/theme_night.css')
      this.removeCss(process.env.VUE_APP_DEV_URL + '/theme/theme_eye.css')
      this.removeCss(process.env.VUE_APP_DEV_URL + '/theme/theme_gold.css')
    },
    display (href) {
      if (href) {
        this.getBook.rendition.display(href).then(() => {
          this.refleshProgress()
        })
      } else {
        this.getBook.rendition.display().then(() => {
          this.refleshProgress()
        })
      }
    },
    flatten (arr) {
      return [].concat(...arr.map(item => [].concat(item, ...this.flatten(item.subitems))))
    }
  }
}
