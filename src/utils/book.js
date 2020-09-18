export const fontSizeList = [
  {
    fontSize: 12
  }, {
    fontSize: 14
  }, {
    fontSize: 16
  }, {
    fontSize: 18
  }, {
    fontSize: 20
  }, {
    fontSize: 22
  }, {
    fontSize: 24
  }, {
    fontSize: 26
  }
]
export const FONT_FAMILY = [
  {
    font: 'Default'
  }, {
    font: 'Cabin'
  }, {
    font: 'Days One'
  }, {
    font: 'Montserrat'
  }, {
    font: 'Tangerine'
  }
]
export function themeList (vue) {
  return [
    {
      alias: vue.$t('book.themeDefault'),
      name: 'Default',
      style: {
        body: {
          color: '#4c5059',
          background: '#cecece'
        }
      }
    },
    {
      alias: vue.$t('book.themeGold'),
      name: 'Gold',
      style: {
        body: {
          color: '#5c5b56',
          background: '#c6c2b6'
        }
      }
    },
    {
      alias: vue.$t('book.themeEye'),
      name: 'Eye',
      style: {
        body: {
          color: '#404c42',
          background: '#a9c1a9'
        }
      }
    },
    {
      alias: vue.$t('book.themeNight'),
      name: 'Night',
      style: {
        body: {
          color: '#cecece',
          background: '#000000'
        }
      }
    }
  ]
}
function addCss (href) {
  const html = document.documentElement
  const head = html.querySelector('head')
  const linkTag = document.createElement('link')
  linkTag.setAttribute('rel', 'stylesheet')
  linkTag.setAttribute('type', 'text/css')
  linkTag.setAttribute('href', href)
  head.appendChild(linkTag)
}
export function addThemeLink (index) {
  removeAllCss()
  switch (index) {
    case 0:
      addCss(process.env.VUE_APP_DEV_URL + '/theme/theme_default.css')
      break
    case 1:
      addCss(process.env.VUE_APP_DEV_URL + '/theme/theme_gold.css')
      break
    case 2:
      addCss(process.env.VUE_APP_DEV_URL + '/theme/theme_eye.css')
      break
    case 3:
      addCss(process.env.VUE_APP_DEV_URL + '/theme/theme_night.css')
      break
    default:
      addCss(process.env.VUE_APP_DEV_URL + '/theme/theme_eye.css')
  }
}
function removeCss (href) {
  const links = document.querySelectorAll('link')
  for (let i = links.length; i >= 0; i--) {
    const link = links[i]
    if (link && link.getAttribute('href') && link.getAttribute('href') === href) {
      link.parentNode.removeChild(link)
    }
  }
}
function removeAllCss () {
  removeCss(process.env.VUE_APP_DEV_URL + '/theme/theme_default.css')
  removeCss(process.env.VUE_APP_DEV_URL + '/theme/theme_night.css')
  removeCss(process.env.VUE_APP_DEV_URL + '/theme/theme_eye.css')
  removeCss(process.env.VUE_APP_DEV_URL + '/theme/theme_gold.css')
}
