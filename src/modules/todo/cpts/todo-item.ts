import { Todo } from 'todo/models/todo'

export default (todo: Todo) => {
  const { id, title, owner, complete } = todo
  const _todo = `{id:${id}, owner: '${owner}', title: '${title}', complete: ${complete}}`

  return `
    <li>
      <input type=checkbox ${complete ? 'checked' : ''} onclick="dispatch('todo/toggle', ${_todo})">
      ${title}
      <button onclick="dispatch('todo/del', ${_todo})">x</button>
    </li>
  `
}