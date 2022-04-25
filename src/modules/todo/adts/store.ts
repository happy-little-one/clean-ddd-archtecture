import { Todo } from 'todo/models/todo'
import { Store } from 'todo/app/port'
import { reRender } from 'lib/utils'

export default <Store>{
  todos: new Map(),
  add(todo: Todo) {
    this.todos.set(todo.id, todo)
    reRender()
  },
  del(id: number) {
    this.todos.delete(id)
    reRender()
  },
  set(todo: Todo) {
    this.todos.set(todo.id, todo)
    reRender()
  }
}