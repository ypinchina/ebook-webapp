<!-- 组件说明 -->
<template>
  <transition name='slide-fadeAndDown'>
    <div class="font-family-pop-up-wrapper" v-show='fontFamilyVisible'>
      <div class="pop-up-title">
        <div class="title-icon" @click='closeFontFamily'>
          <span class="icon icon-down2"></span>
        </div>
        <div class="title-text">
          <span class="text">选择字体</span>
        </div>
      </div>
      <div class="pop-up-item-wrapper">
        <div class="pop-up-item" v-for='(item, index) in fontFamilyList'
        :key='index' @click='selectFontFamily(item)' :class="{'selectFocus': item.font === defaultFontFamily}">
          <div class="item-text">
            <span class="text" >{{ item.font }}</span>
          </div>
          <div class="item-select-icon">
            <span class="icon icon-check" v-show='item.font === defaultFontFamily'></span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ebookMixin } from '../../utils/mixin'
import { FONT_FAMILY } from '../../utils/book'
import { setStorage } from '../../utils/storage'
export default {
  mixins: [ebookMixin, FONT_FAMILY],
  components: {

  },
  data () {
    return {
      fontFamilyList: FONT_FAMILY
    }
  },
  computed: {

  },
  methods: {
    closeFontFamily () {
      this.setFontFamilyVisible(false)
    },
    selectFontFamily (item) {
      this.setDefaultFamily(item.font)
      setStorage('fontFamily', item.font)
      const themes = this.getBook.rendition.themes
      if (themes) {
        if (item.font === 'Default') {
          themes.font('Times New Roman')
        } else {
          themes.font(item.font)
        }
      }
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '../../assets/styles/mixin.styl'
.font-family-pop-up-wrapper
  position absolute
  left 0
  bottom 0
  width 100%
  z-index 200
  background #ffffff
  display block
  .pop-up-title
    box-shadow 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15)
    position relative
    text-align center
    border-bottom px2rem(1) #b8b9bb solid
    padding px2rem(30)
    box-sizing border-box
    .title-text
      font-weight bold
    .title-icon
      top 0
      center()
      height 100%
      position absolute
      left px2rem(40)
  .pop-up-item-wrapper
    .pop-up-item
      padding px2rem(40)
      display flex
      &.selectFocus
        color #346cb9
        font-weight bold
      .item-text
        flex 1
        justify-items flex-start
      .item-select-icon
        flex 0 0 px2rem(40)
        justify-items flex-end
        span
          font-weight bold
</style>
