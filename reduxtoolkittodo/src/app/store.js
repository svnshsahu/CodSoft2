import {configureStore} from "@reduxjs/toolkit";

//store matlab ek tarike se global object ya variable aur waha se sb chize lenge
//reducers mtlb aapko kaun se store mtlb store ke kis part mein(mini store) kya change krna hai , kya update krna hai , functionality wala part isme hota hai
//slices bhi yahi hai bs nam alag
//use selector mtlb store mein se kaun si vslue select krni hsi
//useDispatch mtlb kaun si value bhejni hai store mein

//HAR EK APPLICATION KA EK HI STORE HOTA HAI JISKO BOLA JATA HIA SINGLE SOURCE OF TRUTH


//store mein ab info add kr do reducer ka
import TodoReducer from "../features/todo/todoSlice";   //kyuki ham default .reducer hi export kar rahe islie directly koi bhi nam rkh do abc ya todoreducer
export const store = configureStore({
    reducer : TodoReducer 
})
