<!-- 组件说明 -->
<template>
<transition name="slide-up">
    <div class="setThemes-wrapper" v-show='menuTag === 1'>
      <div class="themesItem" v-for='(item, index) in themesList' :key='index' @click='selectThemes(index)'>
        <div class="preview" :style="{background: item.style.body.background}"
        :class="{'active-border': index === defaultTheme}"
        ></div>
        <div class="text" :class="{'activeThemes': index === defaultTheme}">{{item.alias}}</div>
      </div>
    </div>
</transition>
</template>

<script>
import { ebookMixin } from '../../utils/mixin'
import { themeList } from '../../utils/book'
import { setUserHabit } from '../../utils/storage'
export default {
  mixins: [ebookMixin],
  components: {

  },
  data () {
    return {
      themesList: themeList(this)
    }
  },
  computed: {

  },
  methods: {
    selectThemes (index) {
      this.setDefaultTheme(index)
      const themeName = this.themesList[index].name
      this.getBook.rendition.themes.select(themeName)
      setUserHabit(this.fileName, 'theme', index)
      this.addThemeLink(index)
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
      &.active-border
        border 1px solid #f00
    .text
      display flex
      align-items center
      flex 1
      font-size px2rem(20)
      color #ccc
      &.activeThemes
        color #000
        font-weight bold
</style>
