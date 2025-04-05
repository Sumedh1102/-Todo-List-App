import React, { useReducer } from "react";
import Form from "./Form";
import './index.css'
import constextTodo from "./context";
import reducer from "./Reducer";
import TodoApp from "./TodoApp";

export default function App(){

   const [todos,dispatch] = useReducer(reducer,[])
   console.log(useReducer(reducer,[]))


  return(

    <constextTodo.Provider value={{todos,dispatch}}>
    <>
     <TodoApp />
    </>
    </constextTodo.Provider>
  )
}