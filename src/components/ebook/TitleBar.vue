<!-- 组件说明 -->
<template>
  <div class="titleBar">
    <transition name='slide-down'>
    <div class='title-wrapper' v-show='menuVisible'>
      <div class="left" @click='back'>
        <span class="icon icon-back"></span>
      </div>
      <div class="right">
        <div class="icon-wrapper">
          <span class="icon icon-shelf"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon icon-cart"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon icon-more"></span>
        </div>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
import { ebookMixin } from '../../utils/mixin'
export default {
  mixins: [ebookMixin],
  props: {

  },
  data () {
    return {
    }
  },
  components: {

  },
  computed: {

  },
  methods: {
    back () {

    }
  }
}
</script>

<style lang='stylus' scoped>
@import '../../assets/styles/global.styl'
@import '../../assets/styles/mixin.styl'
.title-wrapper
  width 100%
  height px2rem(120)
  position absolute
  left 0
  top 0
  z-index 101
  display flex
  background #fff
  font-size 15px
  box-shadow 0 px2rem(8) px2rem(8) rgba(0, 0, 0, 0.15)
  .icon
    flex 1
    font-size px2rem(60)
  .left
    flex 0 0 px2rem(60)
    center()
  .right
    flex 1
    display flex
    justify-content flex-end
    .icon-wrapper
      flex 0 0 px2rem(100)
      center()
</style>
