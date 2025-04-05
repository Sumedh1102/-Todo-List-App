import { ADD_TODO } from "./action.type";
import { REMOVE_TODO } from "./action.type";


const Reducer = (state,action) => {
  
    switch(action.type){
        case ADD_TODO :
            return [...state, action.payload] 
        case REMOVE_TODO :
            return state.filter((todo)=>todo !=action.payload)
    }
}

export default Reducer
