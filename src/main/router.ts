import login from 'pages/login'
import todoApp from 'pages/index'
import { reRender } from 'lib/utils'

window.addEventListener('hashchange', reRender)

export default {
  '#/login': login,
  '#/': todoApp,
}