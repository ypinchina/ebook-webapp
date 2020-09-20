<!-- 组件说明 -->
<template>
  <transition name='slide-up'>
    <div class="progress-wrapper" v-show='menuTag === 2'>
      <div class="read-time">
        <span class="text">{{readTimePass()}}</span>
      </div>
      <div class="progress">
        <div class="prev" @click="prevSection">
          <span class="icon icon-back"></span>
        </div>
        <input type="range"
        max="100" min="0"
        step="0"
        :style="{backgroundSize: calcBackground}"
        @input='progressInput($event.target.value)'
        @change="changeProgress($event.target.value)"
        :value="progress"
        :disabled='!bookAvailable'
        ref='progress'
        >
        <div class="next" @click="nextSection">
          <span class="icon icon-forward"></span>
        </div>
      </div>
      <div class="cap-title">
        <span class="title">{{bookAvailable === true ? sectionTitle : null}}</span>
        <span class="read-progress">({{bookAvailable === true ? progress + '%' : '加载中...'}})</span>
      </div>
    </div>
  </transition>
</template>

<script>
import { ebookMixin } from '../../utils/mixin'
import { getUserHabit } from '../../utils/storage'
export default {
  mixins: [ebookMixin],
  components: {

  },
  data () {
    return {

    }
  },
  computed: {
    calcBackground () {
      return `${this.progress}% 100%`
    },
    sectionTitle () {
      const sectionObj = this.getBook.section(this.section)
      if (sectionObj && sectionObj.href && this.getBook && this.getBook.navigation) {
        return this.getBook.navigation.get(sectionObj.href).label
      } else {
        return null
      }
    }
  },
  methods: {
    readTimePass () {
      return this.$t('book.haveRead').replace('$1', this.getTimePass())
    },
    getTimePass () {
      const readTime = getUserHabit(this.fileName, 'readTime')
      if (!readTime) {
        return 0
      } else {
        return readTime
      }
    },
    progressInput (progress) {
      this.setProgress(progress)
      this.$refs.progress.style.backgroundSize = `${this.progress}% 100%`
    },
    changeProgress (progress) {
      const percentage = progress / 100
      const location = progress > 0 ? this.locationObject.cfiFromPercentage(percentage) : 0
      this.getBook.rendition.display(location).then(() => {
        const currentSectionIndex = this.getBook.rendition.currentLocation().start.index
        this.setSection(currentSectionIndex)
      })
    },
    prevSection () {
      let currentSectionIndex = this.section
      if (currentSectionIndex > 0 && this.bookAvailable) {
        currentSectionIndex = currentSectionIndex - 1
        this.setSection(currentSectionIndex).then(() => {
          this.sectionDisplay(currentSectionIndex)
        })
      }
    },
    nextSection () {
      let currentSectionIndex = this.section
      if (this.bookAvailable) {
        if (currentSectionIndex < this.locationObject.spine.length - 1) {
          currentSectionIndex = currentSectionIndex + 1
          this.setSection(currentSectionIndex).then(() => {
            this.sectionDisplay(currentSectionIndex)
          })
        }
      }
    },
    sectionDisplay (currentSectionIndex) {
      const sectionObj = this.getBook.section(currentSectionIndex)
      if (sectionObj && sectionObj.href) {
        this.getBook.rendition.display(sectionObj.href).then(() => {
          this.refleshProgress()
        })
      }
    },
    refleshProgress () {
      const currentLocation = this.getBook.rendition.currentLocation()
      try {
        this.setProgress(Math.round(this.getBook.locations.percentageFromCfi(currentLocation.start.cfi) * 100))
      } catch (err) {
        return null
      }
    }
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
  padding px2rem(20) 0
  box-sizing  border-box
  box-shadow 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15)
  .read-time
    flex 1
    width 100%
    text-align center
  .cap-title
    center()
    width 100%
    flex 1
    box-sizing border-box
    padding 0 px2rem(60)
    span
      display inline-block
      height 100%
    .title
      text-overflow ellipsis
      overflow hidden
      white-space nowrap
  .progress
    flex 2
    width 100%
    height 100%
    padding 0 px2rem(40)
    box-sizing border-box
    center()
    .icon
      font-size px2rem(60)
    input
      margin 0 px2rem(30)
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
