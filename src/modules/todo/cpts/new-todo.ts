import auth from 'auth/adts/store'

export default () => {
  const { username } = auth.currentUser

  return `
    hello ${username}, <input placeholder="what need to be done ?" onkeydown="dispatch('todo/new', event)" >
  `
}