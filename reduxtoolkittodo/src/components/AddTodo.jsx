import React from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'
//DISPATCH REDUCER(SLICES) KO USE KARKE STORE MEIN CHANGES KARTA HAI
function AddTodo() {
    const[input , setInput] = React.useState("")
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input)) //jo text ham pass karenge wo action.payload mein jaengi
        setInput('' ) //kyuki ab input toh add ho gaya toh use clean kr do
    }

    return (
        <form onSubmit={addTodoHandler}>
            <input 
                type="text"
                placeholder='Enter a to do'
                value={input}
                onChange={(e) => setInput(e.target.value)} 
            />
            <button 
                type='submit'>
                Add Todo
            </button>
        </form>
        
    )
}

export default AddTodo
