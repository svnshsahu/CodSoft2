
import Chai from "./chai"  //./chai ka c small kyuki ye toh file ka nam hai
function App() {

  const username = "Shivansh"

  return ( //acc to vite we can return only one tag either chai aur <h1>
            // but ha ham in sabko ek tag mein bind kr de toh i.e, div toh bhi sahi hai
            // <> ... </>    ========    <div> ... </div>



            //ab ham jsx ke help se html toh inject kar le rhe the h1 p BUT js ka koi variable kaise inject karenge aise--->
  <>

    
    <Chai/>
    {/* {username} is evaluated expression  Interview */}
    <h1>Hellooooooo   {username}</h1> 
    {/* bas jab bhi ham {} likhenge toh uske andar ka as a variable treat hoga not as a string */}
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, neque?</p>
  </>
  )
}

export default App
