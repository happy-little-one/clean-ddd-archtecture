import { Todo } from 'todo/models/todo'

export interface Api {
  getAll(): Promise<Todo[]>
  create(todo: Todo): Promise<Todo>
  del(id: number): Promise<void>
  toggle(id: number, complete: boolean): Promise<void>
}

export interface Store {
  todos: Map<number, Todo>
  add(todo: Todo): void
  del(id: number): void
  set(todo: Todo): void
}