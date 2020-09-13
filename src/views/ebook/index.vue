<!-- 组件说明 -->
<template>
  <div class='ebook'>
    <div id="read"></div>
  </div>
</template>

<script>
import Epub from 'epubjs'
export default {
  components: {

  },
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {
    this.showBook()
  },
  methods: {
    showBook () {
      this.book = new Epub()
      this.redition = this.book.rederTo('read', {
        width: window.innerWidth,
        height: window.innerHeight,
        method: 'default'
      })
      this.redition.display()
    }
  }
}
</script>

<style lang='stylus' scoped>

</style>
