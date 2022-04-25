import newTodo from 'todo/cpts/new-todo'
import todoItem from 'todo/cpts/todo-item'
import todoStore from 'todo/adts/store'

export default () => {
  const { todos } = todoStore

  return `
    ${newTodo()}
    <ul>${[...todos.values()].map(todoItem).join('')}</ul>
  `
}