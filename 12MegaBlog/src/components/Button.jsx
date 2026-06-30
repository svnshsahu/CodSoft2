//ab har jagah bar bar button banana time consuming
//Better to make a component and use it everywhere


function Button( {
    children ,
    // type = 'button' ,
    bgColor = 'bg-blue-600' ,
    textColor = 'text-white' ,
    className = '' , //agar waha se koi css properites aa rhi toh
    ...props
} ) {
    return ( //agar JS embed karna rehat hai toh {} mein 
      <button className= {`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColor}`} {...props}>
        {children}
      </button> 
    )
}

export default Button


//component yaha use kahi aur ho rha toh jaha component hai uska state bhi hona chahie lekin uske state ka access toh yaha bhi chahie toh
// uske lie forward ref 