import React, { useContext, useState } from 'react'
import constextTodo from './context'
import { ADD_TODO } from './action.type'
import Display from './Display'

const Form = () => {

  const {todos,dispatch} = useContext(constextTodo)
  const [todostring,setTodoString] = useState('')

  const handleClick = (e) => {
    e.preventDefault();

    if(todostring == ''){
      return alert('Please enter todo to add')
    }
      
    dispatch({
      type:ADD_TODO,
      payload:todostring
    })

    setTodoString('')
  }

  return (
        <>
       
    <form className='text-center m-4' onSubmit={handleClick}>
    <input
      type='text'
      placeholder='Enter Notes'
      className='border-4 p-2 rounded'
      onChange={(e) => setTodoString(e.target.value)}
      value={todostring}
    />
    <button
      type='submit'
      className='bg-orange-500 p-2 rounded ml-2'
    >
      Click
    </button>
  </form>
    <Display />
    </>
  )
}

export default Form