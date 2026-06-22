// import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
function Layout() {
    return (
        //main chahta hoon mere header aur footer wahi rahe uske andar ke cmponent change hote rahe
        <>
        
            <Header/>
            <Outlet/>
            {/* outlet se ham dynamically chize pas kr sakte hai */}
            {/* react router dom hame ek method deta hai outlet jiski madad se ye hoga ki is layout ko as a base use kar lega aur iske andar jo bhi chiz aaegi wo same rkhega jaha outlet dia hai wo change kr dega  */}
            {/* header same rahega footer same rahega outlet change hota rahega  */}
            <Footer/>
        </>
    )
}

export default Layout
