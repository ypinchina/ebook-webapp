<!-- 组件说明 -->
<template>
  <div class="ebook-slide-contents">
    <div class="slide-contents-search-wrapper">
      <div class="slide-contents-search-input-wrapper">
        <div class="slide-contents-search-icon">
          <span class="icon icon-search"></span>
        </div>
        <input type="text" name="" class="slide-contents-search-input"
        :placeholder="$t('book.searchHint')" @click="showSearchVisible">
      </div>
      <div v-show='searchVisible' class="slide-contents-search-cancel" @click='hideSearchVisible'>{{$t('book.cancel')}}</div>
    </div>
    <div class="slide-contents-book-wrapper">
      <div class="slide-contents-book-img-wrapper">
        <img :src="cover" alt="" class="slide-contents-book-img">
      </div>
      <div class="slide-contents-book-info-wrapper">
        <div class="slide-contents-book-title">{{metaData.title}}</div>
        <div class="slide-contents-book-author">{{metaData.creator}}</div>
      </div>
      <div class="slide-contents-book-progress-wrapper">
        <div class="slide-contents-book-progress">
          <span class="progress">{{progress + '%'}}</span>
          <span class="progress-text">{{$t('book.haveRead2')}}</span>
        </div>
        <div class="slide-contents-book-time">
          {{readTimePass()}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ebookMixin } from '../../utils/mixin'
import { getUserHabit } from '../../utils/storage'
export default {
  mixins: [ebookMixin],
  components: {

  },
  data () {
    return {
      searchVisible: false
    }
  },
  computed: {

  },
  methods: {
    readTimePass () {
      return this.$t('book.haveRead').replace('$1', this.getTimePass())
    },
    getTimePass () {
      const readTime = getUserHabit(this.fileName, 'readTime')
      if (!readTime) {
        return 0
      } else {
        return readTime
      }
    },
    showSearchVisible () {
      this.searchVisible = true
    },
    hideSearchVisible () {
      this.searchVisible = false
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '../../assets/styles/mixin.styl'
.ebook-slide-contents
  width 100%
  .slide-contents-search-wrapper
    display flex
    height px2rem(72)
    width 100%
    margin px2rem(40) 0 px2rem(20) 0
    padding 0 px2rem(30)
    box-sizing border-box
    .slide-contents-search-input-wrapper
      center()
      flex 1
      font-size px2rem(24)
      .slide-contents-search-icon
        flex 0 0 px2rem(56)
        center()
        font-size px2rem(24)
      .slide-contents-search-input
        flex 1
        center()
        border none
        height 100%
        background-color transparent
        &:focus
          outline none
    .slide-contents-search-cancel
      center()
      flex 0 0 px2rem(100)
      font-size px2rem(24)
  .slide-contents-book-wrapper
    height px2rem(180)
    width 100%
    display flex
    padding px2rem(20) px2rem(30) px2rem(40) px2rem(30)
    box-sizing border-box
    .slide-contents-book-img-wrapper
      flex 0 0 px2rem(90)
      .slide-contents-book-img
        width px2rem(90)
        height px2rem(120)
    .slide-contents-book-info-wrapper
      flex 1
      padding 0 px2rem(20)
      box-sizing border-box
      .slide-contents-book-title
        font-size px2rem(28)
        ellipsis2()
      .slide-contents-book-author
        font-size px2rem(24)
        width px2rem(307.5)
        margin-top px2rem(10)
        ellipsis()
    .slide-contents-book-progress-wrapper
      flex 0 0 px2rem(140)
      font-size 0
      .slide-contents-book-progress
        .progress
          font-size px2rem(28)
        .progress-text
          font-size px2rem(24)
      .slide-contents-book-time
        font-size px2rem(28)
        margin-top px2rem(10)
</style>
