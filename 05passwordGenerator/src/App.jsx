import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")


  const passwordRef = useRef(null) //kuch default value bhi de skte hai mujhe kuch nahi dena toh null

  const copyPassword = function () {

    passwordRef.current?.select() //bs user ko accha lage wo highlight ho jayega ki kya select hua hai 
    passwordRef.current?.setSelectionRange(0 , 3); // ab sirf 3 hi chiz select hoga
    window.navigator.clipboard.writeText(password)//window object ham abhi use kr skte hai kyuki ham react ke upar kam kar rahe hai ..agar aap next js mein kreneg usme hoti hai server side rendering waha window object nahi hota hai
  } //isse hamara password copy ho jayega

  //agar koi fn bar bar call ho rha toh use cache mein save kr lo by using useCallback ..it is optimised way
  //callback mein 2 chize pass hoti hai pehla function dusra dependencies
  const passwordGenerator = useCallback(() => {
    let pass = ""  //password jo banega wo isme
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" //password jaha se banega

    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "{}[]()@&%!"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass = pass + str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, characterAllowed, setPassword]) //set password bhi ek dependency hai just for optimisation uske bina bhi chalega




  useEffect(() => { //pehli bar jb page load hoga tab chalega fir jb dependent value change hongi tb chalega  
    // eslint-disable-next-line react-hooks/set-state-in-effect
    passwordGenerator() //in usecallback passowrd generator alraedy depends on length , number allowed , character allowed so no need to write in this dependency again
  }, [passwordGenerator]) //passowrd generator dependency mein islie hai kyuki iski bhi value har bar change ho rhi without it react uses old function




  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md text-center rounded-lg px-4 my-8 text-orange-500 bg-gray-500'>Password Generator
        <div className='flex shadow  w-full  rounded-lg overflow-hidden mb-4 bg-amber-200'> <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='passwordddddd'
          readOnly
          ref={passwordRef} />
          <button onClick={copyPassword} className='bg-red-800 m'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={8} max={100} value={length} className='cursor-pointer' onChange={(e) => { setLength(e.target.value) }} />
            <label>Length : {length} </label>
          </div>
          <div className=' flex item-center gap-x-1' >
            <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={() => { setNumberAllowed((prev) => !prev) }} />
            {/* click krne ke bad true false hota rahega in setNumberAllowed */}
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className=' flex item-center gap-x-1' >
            <input type="checkbox" defaultChecked={characterAllowed} id='charInput' onChange={() => { setCharacterAllowed((prev) => !prev) }} />
            <label htmlFor='charInput'>Characters</label>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
