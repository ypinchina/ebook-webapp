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
        <div class="slide-contents-book-title-">{{metaData.title}}</div>
        <div class="slide-contents-book-author">{{metaData.creator}}</div>
      </div>
      <div class="slide-contents-book-progress-wrapper">
        <div class="slide-contents-book-progress">
          <span class="progress">{{progress + '%'}}</span>
          <div class="progress-text">{{$t('book.haveRead2')}}</div>
        </div>
        <div class="slide-contents-book-time"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ebookMixin } from '../../utils/mixin'
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
    .slide-contents-book-img-wrapper
      .slide-contents-book-img
        width 50px
        height 50px
</style>
