import React, { useContext, useState } from 'react'
import constextTodo from './context'
import { ADD_TODO, REMOVE_TODO } from './action.type'
import { X, Trash2 } from 'lucide-react'

const TodoApp = () => {
  const { todos, dispatch } = useContext(constextTodo)
  const [todostring, setTodoString] = useState('')
  
  const handleAdd = (e) => {
    e.preventDefault()
    if (todostring.trim() === '') {
      return alert('Please enter todo to add')
    }
    dispatch({
      type: ADD_TODO,
      payload: todostring
    })
    setTodoString('')
  }
  
  const handleRemove = (todo) => {
    dispatch({
      type: REMOVE_TODO,
      payload: todo
    })
  }
  
  const clearAllTodos = () => {
    // You might need to add a CLEAR_ALL action type to your reducer
    todos.forEach(todo => {
      dispatch({
        type: REMOVE_TODO,
        payload: todo
      })
    })
  }
  
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Todo List</h1>
          <button 
            onClick={clearAllTodos}
            className="text-gray-400 hover:text-gray-600"
          >
            <Trash2 size={24} />
          </button>
        </div>
        
        {/* Todo List */}
        <div className="mb-6">
          {todos.length === 0 ? (
            <p className="text-gray-500 text-center py-4">No tasks yet. Add one below!</p>
          ) : (
            <ul>
              {todos.map((todo, index) => (
                <li 
                  key={index} 
                  className="py-4 border-b border-gray-200 last:border-0"
                >
                  <div className="flex items-center">
                    <button
                      onClick={() => handleRemove(todo)}
                      className="mr-3 text-gray-500 hover:text-gray-800"
                    >
                      <X size={18} />
                    </button>
                    <p className="text-gray-800 text-lg">
                      {todo}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {/* Add Todo Form */}
        <form onSubmit={handleAdd} className="mt-8">
          <input
            type="text"
            value={todostring}
            onChange={(e) => setTodoString(e.target.value)}
            placeholder="Do a very important task"
            className="w-full p-3 text-lg border-b border-gray-300 focus:border-gray-500 outline-none text-gray-800"
          />
        </form>
      </div>
    </div>
  )
}

export default TodoApp