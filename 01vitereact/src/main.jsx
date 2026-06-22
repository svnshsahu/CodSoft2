import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react"
import App from './App.jsx'

// eslint-disable-next-line react-refresh/only-export-components
function MyApp(){
  return(
    <div>
      <h1>My App 234</h1>
    </div>
  )
}

// const reactElement    yaha ham ye kehna chahte hai ki agar hamara myApp at the end of day aise react element ke tarah tree hi ban raha toh agar ham direct ye tree hi call krenge <reactElement/> toh run hona chahie but NAHI ho raha!!!! Kyuki object aise thodi chalta hai aise toh function execute hota hai
//  = {                   
//     type : "a" , 
//     props : {       
//         href : "https://google.com" ,
//         target : "_blank" , 
//     } , 
//     children : "Click me to visit google" 
// }


// const anotherElement =(
//   <a href="https://google.com" target="_blank">Visit Google</a>
// )  agar pura ka pura aise HTML hi de denge toh bhi kam ho jata haithen call ----> anotherElement


const anotheruser = "chai aur react "

const reactElement2 = React.createElement(   //ab ek react element banate hai jo react mein predefined hai uske hisab se  ..... BABBLE by defaut inject krta hai 
  "a",                                      //first parameter expected is tag
  {href : "https://google.com", target :"_blank"} , //second expects is object of all attribute agar koi attribute nahi dena toh {} as while declaring p 
  "Click me visit gulgul" ,           //third parameter is direct text
  anotheruser                           //sara tree banne ke bad variable injections or evaluated expression

)
createRoot(document.getElementById('root')).render(  //CREATEROOT CAN WORK WITHOUT IMPORTING REACT BUT CREATE ELEMENT CANT
  // <StrictMode>



   // <reactElement/> //ab jab function at the end isi mein convert ho raha toh chal jana chahie lekin islie nahi chal rahi kyuki ye function expect kar raha
  // reactElement  //aise krne se bhi nahi chal raha kyuki ye jb hamne custom react mein likha tha usko render krne ka bhi code likha tha :: but yaha toh ham react library ka render use kar rahe
    //since my app is a function so aise bhi bula hi sakte hai   
    // MyApp()    BUT IT IS NOT OPTIMISED
    

    // anotherElement //ye aise chal ja raha kyuki ye koi function nahi ye object mein convert hoga
    //reactElemnt nahi chal raha kyuki syntax galat hai uska jo render hai wo aise key value pair mein nahi expect kar raha jaisa aapka render kar raha customreact mein 

    reactElement2 //ye usi syntax mein bana hai jo react expet kar raha


    // <App/> 


    /* can remove strict mode sb same kam hai bs ye vite lightweight hai */
  /* </StrictMode>, */
)
