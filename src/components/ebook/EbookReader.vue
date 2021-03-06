<!-- 组件说明 -->
<template>
  <div class='ebook-reader'>
    <div id="read"></div>
  </div>
</template>

<script>
import { ebookMixin } from '../../utils/mixin'
import { themeList } from '../../utils/book'
import { setUserHabit, getUserHabit } from '../../utils/storage'
import Epub from 'epubjs'
global.Epub = Epub
export default {
  data () {
    return {
      themesList: themeList(this)
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
      const BASE_URL = process.env.VUE_APP_DEV_URL + '/epub/' + this.fileName + '.epub'
      this.book = new Epub(BASE_URL)
      this.setBook(this.book)// book对象存入vuex
      this.rendition = this.book.renderTo('read', {
        width: window.innerWidth,
        height: window.innerHeight,
        method: 'default'
      })
      const lastLocation = getUserHabit(this.fileName, 'lastLocation')
      if (lastLocation) {
        this.display(lastLocation.start.cfi)
      } else {
        this.display()
      }
      // 电子书渲染
      this.initFont()
      // 电子书字体初始化
      // 注册主题
      this.registerThemes()
      // 读取location对象
      this.book.ready.then(() => {
        return this.book.locations.generate()
      }).then(() => {
        this.setBookAvailable(true)
        this.refleshProgress()
      })
      // 手势操作绑定
      this.initGesture()
      this.bookParse()
    },
    prevPage () {
      if (this.rendition) {
        this.rendition.prev().then(() => {
          this.changeProgressForPage()
        })
        this.hideTitleAndMenu()
        this.setFontFamilyVisible(false)
      }
    },
    nextPage () {
      if (this.rendition) {
        this.rendition.next().then(() => {
          this.changeProgressForPage()
        })
        this.hideTitleAndMenu()
        this.setFontFamilyVisible(false)
      }
    },
    initGesture () {
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
    bookParse () {
      this.book.loaded.cover.then((cover) => {
        this.book.archive.createUrl(cover).then((url) => {
          this.setCover(url)
        })
      })
      this.book.loaded.metadata.then((obj) => {
        this.setMetaData(obj)
      })
      // 解析目录以及子目录
      this.book.loaded.navigation.then(nav => {
        const catalog = this.flatten(nav.toc)
        function find (obj, level = 0) {
          if (!obj.parent) {
            return level
          }
          return find(catalog.filter(parentItem => parentItem.id === obj.parent)[0], ++level)
        }
        catalog.forEach(item => { item.level = find(item) })
        this.setCatelog(catalog)
      })
    },
    changeProgressForPage () {
      this.refleshProgress()
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
    },
    registerThemes () {
      this.themesList.forEach(themes => {
        this.rendition.themes.register(themes.name, themes.style)
      })
      const userHabitTheme = getUserHabit(this.fileName, 'theme')
      if (!userHabitTheme) {
        setUserHabit(this.fileName, 'theme', this.defaultTheme)
        this.setThemes(this.defaultTheme)
      } else {
        this.setThemes(userHabitTheme)
      }
    },
    setThemes (index) {
      this.addThemeLink(index)
      this.setDefaultTheme(index)
      this.rendition.themes.select(this.themesList[index].name)
    },
    initFont () {
      // 初始化字体大小 先从本地读取用户字体大小的习惯
      const storageFontSize = getUserHabit(this.fileName, 'fontSize')
      if (!storageFontSize) {
        setUserHabit(this.fileName, 'fontSize', this.defaultFontSize)
      } else {
        this.setDefaultFontSize(storageFontSize)
      }
      this.rendition.themes.fontSize(storageFontSize)
      // 给book对象导入外部资源的web字体，字体放在nginx服务器上
      this.rendition.hooks.content.register(contents => {
        // contentes.addStylesheet()返回一个Promise对象,所以可以用Promise.all接受所有回调
        Promise.all([
          contents.addStylesheet(`${process.env.VUE_APP_DEV_URL}/web-font/daysOne.css`),
          contents.addStylesheet(`${process.env.VUE_APP_DEV_URL}/web-font/cabin.css`),
          contents.addStylesheet(`${process.env.VUE_APP_DEV_URL}/web-font/montserrat.css`),
          contents.addStylesheet(`${process.env.VUE_APP_DEV_URL}/web-font/tangerine.css`)]).then(() => {
          const storageFontFamily = getUserHabit(this.fileName, 'fontFamily')
          if (!storageFontFamily) {
            setUserHabit(this.fileName, 'fontFamily', this.defaultFontFamily)
          } else {
            this.setDefaultFamily(storageFontFamily)
          }
          if (this.defaultFontFamily === 'Default') {
            this.rendition.themes.font('Times New Roman')
          } else {
            this.rendition.themes.font(this.defaultFontFamily)
          }
        })
      }) // 方便做加载网络字体成功后的统一处理
    }
  }
}
</script>

<style lang='stylus' scoped>

</style>
