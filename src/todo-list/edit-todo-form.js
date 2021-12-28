import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editTodo } from './todos-slice'

export const EditTodo = ({ todo, setIsEditing }) => {
  const { id } = todo
  const editingTodo = useSelector((state) =>
    state.todos.find((todo) => todo.id === id)
  )
  const [title, setTitle] = useState(editingTodo.title)
  const [description, setDescription] = useState(editingTodo.description)

  const handleTitleChange = (e) => setTitle(e.target.value)
  const handleDescriptionChange = (e) => setDescription(e.target.value)
  const dispatch = useDispatch()

  const handleConfirmEdit = () => {
    dispatch(editTodo({ id, title, description }))
    setIsEditing(false)
  }

  return (
    <section className="todo-excerpt">
      <form>
        <label htmlFor="todoTitle">Edit title:</label>
        <input
          type="text"
          id="todoTitle"
          name="todoTilte"
          value={title}
          onChange={handleTitleChange}
        />

        <label htmlFor="descriptionTitle">Edit description:</label>
        <input
          type="text"
          id="descriptionTitle"
          name="descriptionTitle"
          value={description}
          onChange={handleDescriptionChange}
        />
        <button type="button" onClick={handleConfirmEdit}>
          Confirm
        </button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </form>
    </section>
  )
}
