<!-- 组件说明 -->
<template>
    <div class='menu-bar'>
      <transition name='slide-up'>
        <div class="menu-wrapper" v-show='isShowTitleAndMenu'>
          <span class="icon icon-menu" @click="showFontSizeShow(3)"></span>
          <span class="icon icon-progress" @click="showFontSizeShow(2)"></span>
          <span class="icon icon-bright" @click="showFontSizeShow(1)"></span>
          <span class="icon icon-A" @click="showFontSizeShow(0)"></span>
        </div>
      </transition>
    </div>
</template>

<script>
export default {
  props: {
    isShowTitleAndMenu: {
      type: Boolean,
      default: false
    }
  },
  components: {

  },
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {
    showFontSizeShow (tag) {
      console.log(tag)
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '../../assets/styles/global.styl'
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
