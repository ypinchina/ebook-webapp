<!-- 组件说明 -->
<template>
  <transition name="fade">
    <div class='slide-content-wrapper' v-show='menuVisible && menuTag === 3'>
      <transition name="slide-left">
        <div class="content" v-if='menuTag === 3'>
          <div class="content-page-wrapper">
            <div class="content-page">
              <component :is="currentTab === 0 ? content : bookmark"></component>
            </div>
            <div class="content-page-tab">
              <div class="content-page-tab-item" :class="{'selected': currentTab === 0}" @click='changeCurrentTab(0)'>{{$t('book.navigation')}}</div>
              <div class="content-page-tab-item" :class="{'selected': currentTab === 1}" @click='changeCurrentTab(1)'>{{$t('book.bookmark')}}</div>
            </div>
          </div>
        </div>
      </transition>
      <div class="content-bg" @click="hideSlideContent" v-show="menuTag === 3"></div>
    </div>
  </transition>
</template>

<script>
import { ebookMixin } from '../../utils/mixin'
import slideContent from './EbookSlideContents'
import slideBookmark from './EbookSlideBookmark'
export default {
  mixins: [ebookMixin],
  components: {

  },
  data () {
    return {
      currentTab: 0,
      content: slideContent,
      bookmark: slideBookmark
    }
  },
  computed: {

  },
  methods: {
    hideSlideContent () {
      this.setMenuTag(-1)
    },
    changeCurrentTab (index) {
      this.currentTab = index
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '../../assets/styles/mixin.styl'
.slide-content-wrapper
  position absolute
  width 100%
  height 100%
  z-index 300
  left 0
  top 0
  display flex
  .content
    flex 0 0 85%
    width 85%
    height 100%
    .content-page-wrapper
      height 100%
      display flex
      flex-direction column
      .content-page
        width 100%
        overflow hidden
        flex 1
        height 100%
      .content-page-tab
        width 100%
        flex 0 0 px2rem(96)
        height px2rem(96)
        display flex
        .content-page-tab-item
          center()
          flex 1
          font-size px2rem(24)
  .content-bg
    flex 0 0 15%
    height 100%
    width 15%
</style>
