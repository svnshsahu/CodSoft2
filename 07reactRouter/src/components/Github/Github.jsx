// import React from 'react'

import { useEffect,useState } from "react"

function Github() {
    const[data,setData] = useState("")

    useEffect(()=> {
        fetch("https://api.github.com/users/svnshsahu")
        .then(response => response.json())
        .then(data => {
            setData(data)
            console.log(data);  
        })
    },[]) //kuch dependency nahi kyuki jaise hi ye component call hoga followers show ho jayega
    return (
        <div className='text-center m-4 bg-gray-700 text-3xl '>Github Followers : {data.followers}
        <img src={data.avatar_url} alt = ""  />
        </div> //followers lane ke lie API call
    )
}

export default Github
