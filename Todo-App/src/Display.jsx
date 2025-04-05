import React, { useContext } from 'react'
import constextTodo from './context'
import { REMOVE_TODO } from './action.type'

const Display = () => {
 
    const {todos,dispatch} = useContext(constextTodo)
    
  return (
    <div className='text-center p-12'>
            {
               todos.map((todo,index) => {
                return(
                    <div key={index}>
                        <h1>{todo}</h1>
                        <button onClick={() => {
                            return dispatch({
                                type:REMOVE_TODO,
                                payload:todo
                            })
                        }}>
                            x
                        </button>
                    </div>
                )
               })  

            }
    </div>
  )
}

export default Display
