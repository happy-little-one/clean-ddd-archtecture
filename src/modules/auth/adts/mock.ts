import { Api } from 'auth/app/port'

export default <Api>{
  detectLoginStatus: async () => false,
  login: async (username: string, _password: string) => ({ username, type: 'user' }),
  logout() { }
}