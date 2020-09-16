<!-- 组件说明 -->
<template>
  <div class='ebook-reader'>
    <div id="read"></div>
  </div>
</template>

<script>
import { ebookMixin } from '../../utils/mixin'
import Epub from 'epubjs'
global.Epub = Epub
export default {
  data () {
    return {

    }
  },
  mixins: [ebookMixin],
  computed: {

  },
  mounted () {
    const fileName = this.$route.params.fileName.split('|').join('/')
    this.setFileName(fileName).then(() => {
      this.initBook()
    })
  },
  methods: {
    initBook () {
      const BASE_URL = 'http://192.168.100.110:8081/epub/' + this.fileName + '.epub'
      this.book = new Epub(BASE_URL)
      this.setBook(this.book)// book对象存入vuex
      this.rendition = this.book.renderTo('read', {
        width: window.innerWidth,
        height: window.innerHeight,
        method: 'default'
      })
      this.rendition.display()
      this.rendition.on('touchstart', (event) => {
        this.startClientX = event.changedTouches[0].clientX
        this.startTime = event.timeStamp
      })
      this.rendition.on('touchend', (event) => {
        const clientXGap = event.changedTouches[0].clientX - this.startClientX
        const timeGap = event.timeStamp - this.startTime
        if (clientXGap > 40 && timeGap < 500) {
          this.prevPage()
        } else if (clientXGap < -40 && timeGap < 500) {
          this.nextPage()
        } else {
          this.toggleTitleAndMenu()
        }
        event.preventDefault()
        event.stopPropagation()
      })
    },
    prevPage () {
      if (this.rendition) {
        this.rendition.prev()
        this.hideTitleAndMenu()
        this.setFontFamilyVisible(false)
      }
    },
    nextPage () {
      if (this.rendition) {
        this.rendition.next()
        this.hideTitleAndMenu()
        this.setFontFamilyVisible(false)
      }
    },
    toggleTitleAndMenu () {
      this.setMenuVisible(!this.menuVisible)
      this.setMenuTag(-1)
      this.setFontFamilyVisible(false)
    },
    hideTitleAndMenu () {
      this.setMenuVisible(false)
      this.setMenuTag(-1)
      this.setFontFamilyVisible(false)
    }
  }
}
</script>

<style lang='stylus' scoped>

</style>
