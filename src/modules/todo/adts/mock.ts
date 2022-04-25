import { Api } from 'todo/app/port'
import { Todo } from 'todo/models/todo'

export default <Api>{
  getAll: async () => [{ id: 1, owner: 'one', title: 'read book about DDD', complete: true }],
  create(_todo: Todo) { },
  del(_id: number) { },
  toggle(_id: number, _complete: boolean) { }
}