import { useContext, useReducer } from "react";
import { todosReducers } from "../reducers/todo_reducer";
import { createContext } from "react";
export const ToDoContext = createContext({}) ;

export const ToDosProvider = ({children})=>{
    const [todos , dispatch] = useReducer(todosReducers , [])
    return <ToDoContext.Provider value= {{todos, dispatch}}>
{children}
    </ToDoContext.Provider>
} 
export const useTodo = ()=>{
    return useContext(ToDoContext) ; 
}
