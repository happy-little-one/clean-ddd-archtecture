import { User } from 'auth/models/user'

export interface Api {
  detectLoginStatus(): Promise<boolean>
  login(username: string, password: string): Promise<User>
  logout(): Promise<void>
}

export interface Store {
  currentUser: User
  setCurrentUser(user: User): void
}

