import { createSlice } from '@reduxjs/toolkit'

const initialState = []
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      return [action.payload, ...state]
    },
    removeTodo(state, action) {
      const id = action.payload
      console.log(id)
      return state.filter((todo) => todo.id !== id)
    },
    editTodo(state, action) {
      const { id, title, description } = action.payload
      console.log(id)
      const existingTodo = state.find((todo) => todo.id === id)
      if (existingTodo) {
        existingTodo.title = title
        existingTodo.description = description
      }
    },
  },
})
export const { addTodo, removeTodo, editTodo } = todoSlice.actions
export default todoSlice.reducer
