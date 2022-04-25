import { User } from 'auth/models/user'

export interface Todo {
  id: number
  owner: string
  title: string
  complete: boolean
}

export function create(title: string, creator: User): Todo {
  return {
    id: Math.random(),
    owner: creator.username,
    title,
    complete: false
  }
}

export function isBelongTo(todo: Todo, user: User) {
  return todo.owner === user.username
}

export function canDeleteTodo(user: User, todo: Todo) {
  return isBelongTo(todo, user) || user.type === 'admin'
}