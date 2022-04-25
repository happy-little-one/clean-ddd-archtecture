
import * as app from '../app'

window.addEventListener('load', app.检测登录状态)

window.addEventListener('auth', (e: any) => {
  const { type, payload } = e.detail

  switch (type) {
    case 'login':
      const { username, password } = payload.target.elements
      return app.登录(username.value, password.value)
    default:
      return false
  }
})
