//containers jo hai aapki properties accept karta hai as a children(children toh sirf ek nam hai)
//container sirf ek box hota hai jiske upar aur niche kuch hai jaise main mein header footer
//container ke andar sirf height width styling properties define karte hai uske andar jo bhi value hoti hai as it is display kara lete hai
function Container({children}) {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 ">{children}</div>
    )
}

export default Container
