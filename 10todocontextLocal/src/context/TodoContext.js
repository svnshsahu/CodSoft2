/* eslint-disable no-unused-vars */
import { createContext , useContext} from "react";

export const TodoContext = createContext({
    todos : [
        {
            id : 1 ,
            todo : "Todo msg",
            completed : false ,
        }
    ], //functionalities ke andar definition nahi likhte hai sirf uska nam likhte hai jaise addtodo 
    addTodo : (todo) => {} ,
    updatedTodo : (id,todo) => {} ,
    deleteTodo : (id) => {} ,
    toggleComplete : (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider

 