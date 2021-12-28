import React from 'react'

import { TodosList } from './todo-list/todos-list.component'
import { AddTodoForm } from './todo-list/add-todo-form'

function App() {
  return (
    <div className="App">
      <AddTodoForm />
      <TodosList />
    </div>
  )
}

export default App
