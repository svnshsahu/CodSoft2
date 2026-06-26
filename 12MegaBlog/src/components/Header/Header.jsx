import {Container ,Logo , LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Header() {
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()
    //is tarah ki navigation bar jab bhi banti hai na toh actually mein  ek array banaya jata hai uske upar loop kia jata hai , is array k andr objects hote hai
    const navItems = 
    return (
        <h2>frfrfr</h2>
    )
}

export default Header
