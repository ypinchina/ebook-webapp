<!-- 组件说明 -->
<template>
  <div class='ebook-reader'>
    <title-bar :isShowTitleAndMenu='isShowTitleAndMenu'></title-bar>
    <div id="read"></div>
    <menu-bar :isShowTitleAndMenu='isShowTitleAndMenu'></menu-bar>
  </div>
</template>

<script>
import Epub from 'epubjs'
import titleBar from './TitleBar'
import menuBar from './MenuBar'
global.Epub = Epub
export default {
  components: {
    titleBar, menuBar
  },
  data () {
    return {
      isShowTitleAndMenu: false
    }
  },
  computed: {

  },
  mounted () {
    const fileName = this.$route.params.fileName.split('|').join('/')
    this.$store.dispatch('setFileName', fileName).then(() => {
      this.initBook()
    })
  },
  methods: {
    initBook () {
      const BASE_URL = 'http://192.168.100.110:8081/epub/' + this.$store.state.book.fileName + '.epub'
      this.book = new Epub(BASE_URL)
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
        this.isShowTitleAndMenu = false
      }
    },
    nextPage () {
      if (this.rendition) {
        this.rendition.next()
        this.isShowTitleAndMenu = false
      }
    },
    toggleTitleAndMenu () {
      this.isShowTitleAndMenu = !this.isShowTitleAndMenu
    }
  }
}
</script>

<style lang='stylus' scoped>

</style>
