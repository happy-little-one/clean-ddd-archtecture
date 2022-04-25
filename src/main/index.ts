import { dispatch } from 'lib/utils'
import 'auth/adts/hanlders'
import 'todo/adts/handlers'

import router from './router'

//@ts-ignore
window.dispatch = dispatch

function render() {
  document.getElementById('app').innerHTML = router[location.hash]()
}

render()

window.addEventListener('re-render', render)




