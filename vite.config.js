import {resolve} from 'path'

export default {
  resolve: {
    alias: {
      pages: resolve('src/pages'),
      lib: resolve('src/lib'),
      auth: resolve('src/modules/auth'),
      todo: resolve('src/modules/todo'),
    },
  },
}
