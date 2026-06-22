import { useState } from 'react'
// is usestate ke help se hooks kam karega ACCHA YE EK HOOKS HI HAI USESTATE AUR LE AAO JAISE useEffect

import './App.css'

function App() {
  //ye hook hai aapki state ko change krne ke lie responsible matlab is change ko DOM ya UI mein reflect karane ke lie 
const [counter , setCounter] =  useState(15)  //kuch bhi defalut value de do true , false ,  string  CONST BHI DE SAKTE HAI LET BHI KYUKI ARRAY TOH CONSRANT HI HAI USKE ANDAR KI VALUE CHANGE HO RAHI
//use state se aapko 2 chiz milti hai array ke format mein
//0th index pe jo value milti hai use LETS SAY ABHI COUNTER KEH DETE HAI
//1st index pr hame ek function milta haiLETS SAY HAM USE SETCOUNTER KEH LETE HAI

  // let counter = 15 AB ISKO HATA DO UPAR WALE TARIKE SE HO WAHI RAHA HAI KLET COUNTER = 15 KYUKI ISSE UI MEIN REFLECT NAHI HOGA

  const addValue = () =>{
    // console.log("value added" , Math.random());
    // counter++ AB AISE NAHI UPDATE KARENGE Value
    if(counter <19){
      setCounter(counter + 1) 
      setCounter(counter + 1) //AGAR EK SE JAADA SETCOUNTER HAI FIR BHI VALYE 15 SE 16 HI HOGI NA KI 19 KYUKI USESTATE TASKS KO BATCHES MEIN BANATA HAI TOH AAP EK HI KAM KO BAR BAR REPEAT KR RHE 15 TO 16
      setCounter(counter + 1) 
      setCounter(counterxyz => counterxyz + 1) //agar aap update karna hi chahte ho toh isi mein ek variable leke usko update karo USES CALLBACK FUNCTION
      //toh suru ke tin se 15 to 16 and laste wala 16 to 17 so on one click 15 to 17
    }
    

    console.log("clicked" , Math.random(), counter); //yaha toh update ho raha counter but counter value : par nahi ho raha 
    //yaha counter ki value ek kam aa rahi kyuki setCounter updation needs time but console log tutnt ho ja raha 
    
  }

    const removeValue = () =>
      {
        if(counter>0){
            setCounter(counter -1 )
        }

      }
  return (
    //ab bina react import kie bhi ye div jaega iski tree banegi using BABEL
    <>
     <h1>Chai 21 April</h1>
     {/* ab har jagah counter use ho raha toh kaise karenge .... react say sUI main ctrl karunga ki kaise display aur change hogi value har jagah usin HOOKS  */}
     <h2>Counter Value : {counter}</h2>

     <button
     onClick={addValue}>Add value{counter}</button> 
     {/* //yaha addValue() islie nahi use kie kyuki agar yaha function passs krte toh click krne se pehle hi function execute ho jata  islie srf refernece pass kar raha  */}
     <br/>
     <button onClick = {removeValue}>Remove value{counter}</button>
    </>
  )
}

export default App
