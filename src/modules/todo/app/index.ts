import api from 'todo/adts/mock'
import store from 'todo/adts/store'
import { create, canDeleteTodo, Todo } from 'todo/models/todo'
import authStore from 'auth/adts/store'
import { message } from 'lib/utils'

export async function 查看待办() {
  const todos = await api.getAll()
  todos.forEach(t => store.add(t))
}

export async function 新增待办(title: string) {
  const { currentUser } = authStore
  const todo = create(title, currentUser)
  await api.create(todo)
  store.add(todo)
}

export async function 删除待办(todo: Todo) {
  const { currentUser } = authStore
  if (canDeleteTodo(currentUser, todo)) {
    await api.del(todo.id)
    store.del(todo.id)
  } else {
    message('你无权限删除此待办')
  }
}

export async function 切换状态(todo: Todo) {
  const { id, complete } = todo
  await api.toggle(id, !complete)
  store.set({ ...todo, complete: !complete })
}