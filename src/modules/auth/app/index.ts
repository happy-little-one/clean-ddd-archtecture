import api from 'auth/adts/mock'
import { navigate } from 'lib/utils'
import store from 'auth/adts/store'

export async function 检测登录状态() {
  const isLogin = await api.detectLoginStatus()
  if (isLogin) navigate('/')
  else navigate('/login')
}

export async function 登录(username: string, password: string) {
  const user = await api.login(username, password)
  store.setCurrentUser(user)
  navigate('/')
}

export async function 退出() {
  await api.logout()
  navigate('/login')
}