<!-- 组件说明 -->
<template>
  <div class='scroll-wrapper'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    topPx: {
      type: Number,
      default: 0
    },
    bottomPx: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {
  }
}
</script>

<style lang='stylus' scoped>
@import '../../assets/styles/mixin.styl'
</style>
