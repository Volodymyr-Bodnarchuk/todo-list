import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { EditTodo } from './edit-todo-form'
import { removeTodo } from './todos-slice'

export const TodosList = () => {
  const todos = useSelector((state) => state.todos)
  const [isEditing, setIsEditing] = useState(false)
  const [editableTodo, setEditableTodo] = useState({})

  const dispatch = useDispatch()
  const onRemoveTodo = (id) => {
    dispatch(removeTodo(id))
  }

  const renderTodos = todos.map((todo) => (
    <div className="todo-excerpt" key={todo.id}>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <button onClick={() => onRemoveTodo(todo.id)}>Delete</button>
      <button
        style={{ marginLeft: '1rem' }}
        onClick={() => {
          setEditableTodo(todo)
          setIsEditing(true)
        }}
      >
        Edit current todo
      </button>
    </div>
  ))

  return (
    <section className="todos-list">
      <h2>Todos</h2>
      {isEditing ? (
        <EditTodo todo={editableTodo} setIsEditing={setIsEditing} />
      ) : (
        ''
      )}

      {isEditing ? '' : todos.length === 0 ? 'There is no todos' : renderTodos}
    </section>
  )
}
