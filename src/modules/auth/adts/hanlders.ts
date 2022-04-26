
import * as app from '../app'

window.addEventListener('load', app.检测登录状态)

window.addEventListener('auth', (e: CustomEvent) => {
  const { type, payload } = e.detail

  switch (type) {
    case 'login':
      const { username, password } = payload.target.elements
      app.登录(username.value, password.value)
      break
    default:
      break
  }
})
