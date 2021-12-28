import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../todo-list/todos-slice'
export default configureStore({
  reducer: {
    todos: todoReducer,
  },
})
