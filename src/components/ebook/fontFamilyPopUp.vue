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
    }
  }
}
</script>

<style lang='stylus' scoped>
.font-family-pop-up-wrapper
  position absolute
  left 0
  bottom 0
  width 100%
  z-index 200
  background #ffffff
  .pop-up-title
    position relative
    text-align center
    border-bottom 1px #ccc solid
    padding 10px
    center()
    .title-icon
      position absolute
      left 10px
  .pop-up-item-wrapper
    .pop-up-item
      padding 10px
      display flex
      &.selectFocus
        color blue
        font-weight bold
      .item-text
        flex 1
        justify-items flex-start
      .item-select-icon
        flex 0 0 20px
        justify-items flex-end
</style>
