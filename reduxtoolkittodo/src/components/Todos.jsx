// import React from 'react'
import { useSelector , useDispatch } from "react-redux"
import { removeTodo } from "../features/todo/todoSlice"
function Todos() {
    //useselector mein aapko states ka access milta hai
    const todos = useSelector((state) =>state.todos ) //ye ek method hai but iske andar aapko state ka access milta hai ek callback ke andar
    const dispatch = useDispatch()
    return (
        <>
            <div>Todos</div>
            <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.text}
                    {/* INTERVIEW ab ham direct yaha onclick={dispatch(removeTodo(todo.id))} aise pass nahi kr skte kyuki ham chahte hai ki jb click ho tb ye chale islie isko ek callback mein rakh lete hai */}
                    <button onClick={()=> dispatch(removeTodo(todo.id))}> X</button>
                </li>
              
            ))}
            </ul>
        </>
    )
}

export default Todos
