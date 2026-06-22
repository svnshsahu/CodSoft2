import { useState } from "react";
import { useTodo } from "../context";

function TodoForm() {
    const [todo , setTodo] = useState("")

    const {addTodo} = useTodo()

    const add = (e) =>{
        e.preventDefault()

        if(!todo) return  

        addTodo({ todo , completed:false}) //accha ye jo todo hai wo jo addTodo func mein id , todo , completed hai usme se todo hai kyuki id toh ham wahi pass kar rahe
        setTodo(" ")//kyuki ab toh add ho gaya na ab islie yaha ke todo ki valuue null 
    }
    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo} //isko wiring bolte hai
                onChange={(e) =>  setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

