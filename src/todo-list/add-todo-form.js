import React, { useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { addTodo } from './todos-slice'

export const AddTodoForm = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleTitleChange = (e) => setTitle(e.target.value)
  const handleDescriptionChange = (e) => setDescription(e.target.value)

  const dispatch = useDispatch()

  const onFormSubmit = () => {
    if (title && description) {
      dispatch(addTodo({ id: nanoid(), title, description }))
    }
    setTitle('')
    setDescription('')
  }

  return (
    <section>
      <h2>Add todo</h2>
      <form>
        <label htmlFor="todoTitle">Title:</label>
        <input
          id="todoTitle"
          name="todoTitle"
          type="text"
          value={title}
          onChange={handleTitleChange}
        />

        <label htmlFor="todoDescription">Description:</label>
        <input
          id="todoDescription"
          name="todoDescription"
          type="text"
          value={description}
          onChange={handleDescriptionChange}
        />
        <button onClick={onFormSubmit} type="button">
          Save todo
        </button>
      </form>
    </section>
  )
}
