// import React from 'react'
import { useParams } from "react-router"
function User() {
    const {userid} = useParams() //isse userid ke bad jo bhi / ke bad likha hai wo as a userid mil jayega
    return (
        <div className="bg-gray-600 text-amber-100">User:{userid}</div> //user id hi kaha hai waha toh wahi likhenge waha 
    )
}

export default User
