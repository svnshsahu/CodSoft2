
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
 

  return (
    <> 
    {/* ab confusion hoga ki wrap isme lagega ki nahi context api jaise provider ka wrap toh ye wrap kabhi kabhi main.jsx mein bhi laga dete hai  */}
      <h1>Learn redux</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
