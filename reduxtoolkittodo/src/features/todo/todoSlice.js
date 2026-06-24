import { createSlice,nanoid } from "@reduxjs/toolkit"; //nano id generates unique id

const initialState = { //initial state mtlb pehle se kya hoga uske andar koi value hogi 
    //initial state kuch bhi ho skti hai object , array but obj le lete hai kyuki uske andar kai chize store kr skte hai
    todos:[{id:1 , text:"Hello World"}] ,  //slice reducer ka hi bada version hai sirf namming convention hai redux toolkit mein use slices hi bolte hai
}

// Slice = state + reducers + actions ka bundle.

export const todoSlice = createSlice({ // yaha slice create kr lia (method hai ek) , iske andar mostly object hi aaate hai
    //jo slice ka nam yaha denge wahi nam kyuki jab ham redux toolkit use krenege chrome extension mein tb waha yahi nam show hoga
    name : "todo" ,//ye property mere man se nahi di yahi nam hota hai redux toolkit mein 
    initialState, //ye bhi declare krna hota hai
    reducers : { // reducers mein aati hai property aur function //property ka nam hai addtodo //uske bad functon ya toh wahi declare kr do ya arrow function wahi create kr lo
        addTodo : (state , action) => {
        //jabbhi aap addtodo krogeaapko 2 chiz ka access milega state aur action

        //context API mein yaha sirf declaration tha but isme function yahi define karoge //HAmesa aapko yaha 2 chize milegi : state , action
       //state toh aapko hamesa access dega ki abhi meri jo initial stae hai jo aage jake change ho jaegi ,, abhi usme kya values hai unka access dega
       //action jaise remove krne ke lie id toh lagegi uski , toh matlab jab ham removeTodo call karenge toh hame kuch toh id lagegi wo value action dega
            const todo = {
                id:nanoid(), //YE PURANA TARIKA HAI : id:Date.now() ,
                text : action.payload ,  //payload ek object hai jisme id , email kuch bhi ho //ab har bar hello world toh bhejoge nahi kyuki user aapko text bhej raha ho toh wo niklega action mein se action.payload.text //ab property hi text hai toh dubara .text likhne ki zrurat nhi
            }


            //todo ko state mein update toh krna padega na //dekho hamne initial state mein ek mini store(shayad mini store hai ye) todos nam ka banaya hai us todos state mein mera ye todo push kr do //.push kyuki hamne initial state array banaya hai
            state.todos.push(todo);

        } , 
        //action ye hai ki kya hua hai jaise addtodo hua hai // ab usme jo extra data denge jaise id text wo payload hai
        removeTodo : ( state , action ) => {//ab remove krna h ai toh id toh bhejega hi hoga
            //Lekin Redux Toolkit aur Redux ke standard ke hisaab se data ko payload property mein rakha jata hai, isliye hum: ( GPT)
            state.todos = state.todos.filter((todo) => todo.id !== action.payload) //action.payload.id islie nahi kyuki wo apne aap id compare kr lega
        },
    }
})



//actually mein aapko iske 2 part export krne hai
//mtlb ab jo functionalities hai (addtodo / removetodo) kyuki isi ke thorugh ham state update krenge toh ye functionality individually kam mein aaegi
export const {addTodo ,removeTodo } = todoSlice.actions //ye wala export components mein kam aaenge //.actions mtlb wahi addTodo RemoveTodo

//ab store ko bhi toh pata hona chahie ki kaun kaun se reducer hai toh ye wala export store ke lie
export default todoSlice.reducer

//ab ham yaha pr .reducer export kr rhe but upar reducers banaye hai .. ye ham kar pa rhe kyuki RTK kya karta hai ki hamare sare reducers jo hamne
// likhe hai reducers :{addtodo , removetodo} in sab ko ek function mei wrap kr deta hai named reducer islie ham .reducer export kar pa rahe 