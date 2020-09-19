<!-- 组件说明 -->
<template>
  <div class='ebook'>
    <title-bar></title-bar>
    <ebook-reader></ebook-reader>
    <menu-bar></menu-bar>
  </div>
</template>

<script>
import titleBar from '../../components/ebook/TitleBar'
import menuBar from '../../components/ebook/MenuBar'
import ebookReader from '../../components/ebook/EbookReader'
import { ebookMixin } from '../../utils/mixin'
import { setUserHabit, getUserHabit } from '../../utils/storage'
export default {
  mixins: [ebookMixin],
  components: {
    ebookReader, titleBar, menuBar
  },
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {
    this.setReadTime()
  },
  beforeDestroy () {
    clearInterval(this.countTime)
  },
  methods: {
    setReadTime () {
      let readTime = getUserHabit(this.fileName, 'readTime')
      if (!readTime) {
        readTime = 0
        setUserHabit(this.fileName, 'readTime', readTime)
      }
      this.countTime = setInterval(() => {
        setUserHabit(this.fileName, 'readTime', readTime + 1)
      }, 60000)
    }
  }
}
</script>

<style lang='stylus' scoped>

</style>
