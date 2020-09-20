<!-- 组件说明 -->
<template>
    <div class='menu-bar'>
      <transition name='slide-up'>
        <div class="menu-wrapper" v-show='menuVisible'>
          <span class="icon icon-menu" @click="showFontSizeShow(3)"></span>
          <span class="icon icon-progress" @click="showFontSizeShow(2)"></span>
          <span class="icon icon-bright" @click="showFontSizeShow(1)"></span>
          <span class="icon icon-A" @click="showFontSizeShow(0)"></span>
        </div>
      </transition>
      <set-font-size></set-font-size>
      <font-family-pop-up></font-family-pop-up>
      <theme-style></theme-style>
      <progress-bar></progress-bar>
      <ebook-slide></ebook-slide>
    </div>
</template>

<script>
import { ebookMixin } from '../../utils/mixin'
import fontFamilyPopUp from './fontFamilyPopUp'
import setFontSize from './SetFontSize'
import themeStyle from './ThemeStyle'
import progressBar from './progress'
import ebookSlide from './EbookSlide'
export default {
  mixins: [ebookMixin],
  props: {

  },
  components: {
    setFontSize, fontFamilyPopUp, themeStyle, progressBar, ebookSlide
  },
  data () {
    return {

    }
  },
  methods: {
    showFontSizeShow (tag) {
      this.setMenuTag(tag)
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '../../assets/styles/mixin.styl'
.menu-bar
  .menu-wrapper
    width 100%
    height px2rem(120)
    position absolute
    left 0
    bottom 0
    z-index 101
    background #fff
    font-size 15px
    box-shadow 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15)
    text-align center
    display flex
    justify-content center
    align-items center
    &.not-shadow
      box-shadow none
    .icon
      flex 1
      font-size px2rem(60)
</style>
