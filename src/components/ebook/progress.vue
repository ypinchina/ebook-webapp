<!-- 组件说明 -->
<template>
  <transition name='slide-up'>
    <div class="progress-wrapper" v-show='menuTag === 2'>
      <div class="progress">
        <!-- <input type="range"
        max="100" min="0"
        step="0"
        :style="{backgroundSize: calcBackground}"
        @input='progressInput($event.target.value)'
        @change="setProgress($event.target.value)"
        :value="progress"
        :disabled='!bookAvailable'
        ref='progress'
        > -->
      </div>
      <div class="text">
        <!-- {{bookAvailable === true ? progress + '%' : '加载中...'}} -->
        加载中
      </div>
    </div>
  </transition>
</template>

<script>
import { ebookMixin } from '../../utils/mixin'
export default {
  mixins: [ebookMixin],
  components: {

  },
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {
    progressInput () {},
    setProgress () {}
  }
}
</script>

<style lang='stylus' scoped>
@import '../../assets/styles/mixin.styl'
.progress-wrapper
  position absolute
  bottom px2rem(120)
  z-index 101
  left 0
  background-color #fff
  width 100%
  height px2rem(220)
  flex-direction column
  box-shadow 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15)
  .text
    text-align center
    width 100%
  .progress
    width 100%
    height 100%
    padding 0 px2rem(50)
    box-sizing border-box
    center()
    input
      height px2rem(10)
      -webkit-appearance none
      background linear-gradient(#999, #999) no-repeat #ddd
      background-size 0 100%
      width 100%
    input[type=range]::-webkit-slider-thumb
      -webkit-appearance none
      border-radius 50%
      height px2rem(50)
      width px2rem(50)
      background-color #fff
      box-shadow 0 px2rem(8) px2rem(8) rgba(0, 0, 0, .15)
      border solid px2rem(2) #666/*设置边框*/
</style>
