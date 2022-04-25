import { Store } from 'auth/app/port'
import { User } from 'auth/models/user'

export default <Store>{
  currentUser: undefined,
  setCurrentUser(user: User) {
    this.currentUser = user
  }
}