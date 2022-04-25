import * as app from 'todo/app'

window.addEventListener('hashchange', () => {
  location.hash === '#/' && app.查看待办()
})

window.addEventListener('todo', (e: CustomEvent) => {
  const { type, payload } = e.detail

  switch (type) {
    case 'new':
      const event = payload as KeyboardEvent
      const target = event.target as HTMLInputElement
      const title = target.value.trim()
      if (title && event.key === 'Enter') {
        app.新增待办(title)
        target.value = ''
      }
      break
    case 'toggle':
      app.切换状态(payload)
      break
    case 'del':
      app.删除待办(payload)
      break
    default:
      break;
  }
})