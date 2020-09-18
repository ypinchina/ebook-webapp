import Vue from 'vue'
import I18N from 'vue-i18n'
import cn from './cn'
import en from './en'
Vue.use(I18N)
let locale = localStorage.getItem('lang')
if (!locale) {
  locale = 'cn'
  localStorage.setItem('lang', locale) // 默认用中文
}
const messages = {
  en, cn
}
const i18n = new I18N({ messages, locale })
export default i18n
