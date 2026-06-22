import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github from './components/Github/Github'



// App.jsx role gets replaced by Layout.jsx !!!!!!!!!!!!!!!!!!!!! 



const router = createBrowserRouter([  //ham pehle createBrowserRouter(reactrouter se ye method aaya ) se router banate hai jisme ham bataenge ki kis hisab se harchiz route hogi
  //iske andar ham array banate hai , is array ke andar hm puri list dal dete hai jo bhi hame objects chahie
  {
    path : "/" , //ye hai top level element iske andar nesting ho rhi
    element : <Layout/>, // ab ham layout de die ki isi ke according do
    children : [  //matlab jo jo andar banana chahte ho home , about ,contact
      {path: "", //isme path ki value empty matlaab ki pehle hi home de do
        element : <Home/> //kya display  karunga pehli hi home display karunga islie home yaha render kar dia
      },
      {
        path:"about", //next agar path mein /about toh ye about section chalega
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {//colon ke bad jo likh rhe dhyan dena usse hi value aaegi
        path : "user/:userid" , //agar url mein koi id leni hai toh e.g, user/89 isse ham 89 id wale user ka data represent kr skte hai
        element :<User/> //agar path mein :xyz likh die ho toh uske element yani User component mein uska access mil jata hai
      },
      { 
        path:"github",
        element:<Github/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/> 
    {/* kyuki hamne react router insert kr dia hai toh usi ko render karenge  */}
    {/* ye component ek prop leta hai usko ek hi chiz chahie ki router kaha kaise rout kar raha  */}
  </StrictMode>,
)
