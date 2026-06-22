import {useState , useContext} from 'react'
import UserContext from '../context/UserContext'
function Login() {

    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username,password})
    }




    const {setUser} = useContext(UserContext) //userContext mein jo jo value pass kie the jaies user and setUser but hame yaha setUser ka hi use hai toh wahi le rahe

    return (
        <div>
            <h2>login</h2>
            <input type="text" 
            value={username}
             onChange = { e => setUsername(e.target.value)}
             placeholder='username' />

            <input type='text' value={password}
             onChange = { e => setPassword(e.target.value)}
              placeholder='password' />
           
            <button onClick={handleSubmit} >Submit</button>
        </div>   
    )
}

export default Login
