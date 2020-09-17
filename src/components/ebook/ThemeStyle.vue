<!-- 组件说明 -->
<template>
<transition name="slide-up">
    <div class="setThemes-wrapper" v-show='menuTag === 1'>
      <div class="themesItem" v-for='(item, index) in themesList' :key='index' @click='selectThemes(index)'>
        <div class="preview" :style="{background: item.style.body.background}"
        :class="{'no-border': index !== 0}"
        ></div>
        <div class="text" :class="{'activeThemes': index === defaultTheme}">{{item.name}}</div>
      </div>
    </div>
</transition>
</template>

<script>
import { ebookMixin } from '../../utils/mixin'
import { THEMES } from '../../utils/book'
export default {
  mixins: [ebookMixin],
  components: {

  },
  data () {
    return {
      themesList: THEMES
    }
  },
  computed: {

  },
  methods: {
    selectThemes (index) {
      this.setDefaultTheme(index)
      this.getBook.rendition.themes.select(this.themesList[index].name)
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '../../assets/styles/mixin.styl'
.setThemes-wrapper
  position absolute
  bottom px2rem(120)
  z-index 101
  left 0
  background-color #fff
  width 100%
  height px2rem(180)
  display flex
  box-shadow 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15)
  .themesItem
    display flex
    flex 1
    flex-direction column
    center()
    height 100%
    box-sizing border-box
    padding px2rem(10)
    .preview
      flex 1
      width 100%
      height px2rem(40)
      border 1px #666 solid
      &.no-border
        border none
    .text
      display flex
      align-items center
      flex 1
      font-size px2rem(20)
      color #ccc
      &.activeThemes
        color #000
</style>
