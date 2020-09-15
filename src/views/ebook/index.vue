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
export default {
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
  },
  methods: {
  }
}
</script>

<style lang='stylus' scoped>

</style>
