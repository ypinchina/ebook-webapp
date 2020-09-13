<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
window.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement
  let winFont = window.innerWidth / 10
  winFont = winFont > 50 ? 50 : winFont
  html.style.fontSize = winFont
})
export default {
}
</script>
<style lang='stylus' scoped>
  #app
    span
      font-family 'Days One'
      font-size 16px
      color #fba
</style>
