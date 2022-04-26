export default () => `
  <form onsubmit="event.preventDefault();dispatch('auth/login', event)">
    <input name=username placeholder=username>
    <input name=password type=password placeholder="password, type anything">
    <input type=submit value=登录 />
  </form>
`
