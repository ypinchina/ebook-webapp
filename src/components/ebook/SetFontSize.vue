<!-- 组件说明 -->
<template>
  <div class=''>
    <transition name='slide-up'>
      <div class="handleBar" v-show='menuTag === 0' >
        <div class="font-size-wrapper">
          <div class="preview" :style="{fontSize: fontSizeList[0].fontSize + 'px'}">A</div>
          <div class='box'>
            <div class="select-wrapper" v-for="(item, index) in fontSizeList" :key="index" @click="setFontSize(item.fontSize)">
              <div class="line">
              </div>
                <div class="point-wrapper" >
                  <div class="point" v-show="defaultFontSize === item.fontSize">
                    <div class="small-point"></div>
                  </div>
                </div>
              <div class="line">
              </div>
            </div>
          </div>
          <div class="preview" :style="{fontSize: fontSizeList[fontSizeList.length - 1].fontSize + 'px'}">A</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

import { ebookMixin } from '../../utils/mixin'
import { menuFun } from '../../utils/book'
export default {
  mixins: [ebookMixin, menuFun],
  components: {

  },
  data () {
    return {
      fontSizeList: menuFun.fontSizeList
    }
  },
  computed: {

  },
  methods: {
  }
}
</script>

<style lang='stylus' scoped>
// @import '../../assets/'
.handleBar
  position absolute
  left 0
  bottom 40px
  height px2rem(140)
  z-index 101
  background #fff
  width 100%
  box-shadow 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15)
  .font-size-wrapper
    display flex
    height 100%
    .preview
      flex 0 0 px2rem(40)
      center()
    .box
      flex 1
      display flex
      .select-wrapper
        flex 1
        display flex
        align-items center
        &:first-child>.line:first-child
          border none
        &:last-child>.line:last-child
          border none
        .line
          height 0
          flex 1
          border-top px2rem(1) solid #ccc
        .point-wrapper
          position relative
          border-left 1px solid #ccc
          flex 0 0 0
          width 0
          height px2rem(14)
          .point
            left -12px
            top -10px
            position absolute
            border-radius 50%
            height px2rem(50)
            width px2rem(50)
            background-color #fff
            box-shadow 0 px2rem(8) px2rem(8) rgba(0, 0, 0, .15)
            center()
            border 1px solid #ccc
            .small-point
              width px2rem(10)
              height px2rem(10)
              background-color #000
              border-radius 50%
</style>
