import { createContext,useContext } from "react";
//isme usercontext aur usercontextprovider dono ek saaath hhi bana diye hai
export const ThemeContext = createContext({//createContext mein default value dali ja sakti hai pehle mein nahi dale the isme dal dete hai
    themeMode : "light" ,   //mtlb initial jo value banetoh uske andar kaun kaun si value already feed ho
    darkTheme : () => {} ,  //jb bhi koi context call use ye method(darkTheme/lightTheme) aur variable( themeMode) bhi mil jaega
    lightTheme : () => {},
})



//isi class mein

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() { //custom Hooks
    return useContext(ThemeContext)
}