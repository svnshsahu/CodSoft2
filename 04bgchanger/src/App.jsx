
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    // className islie kyuki class ek reserved keyword hai AUR JSX MEIN CLASSNAME KEHTE HAI
    <div className='w-full h-screen duration-200'
      style={{ backgroundColor: color }}
    // 2 curly braces pehle se lage hai toh color ke lie ek aur lagane ki zrurat nahi ND STYLE ={ {}} AISE ISLIE DIE KYUKI SYNTAX HAI
    >
      {/* onclick expect karta hai ki aap use ek function pass karoge */}
      {/* abhi on click ko function chahie islie ham use abhi ()=>() de rahe agar direct {setColor("cfc")} de denge toh ise function ki return value jayegi */}
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-700' >Red</button>
          <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "blue" }}>Blue</button>
          <button onClick={()=>setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{ backgroundColor: "yellow" }}>Yellow</button>
          <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "green" }}>Green</button>
        </div>
      </div>
    </div>
  )
}

export default App
