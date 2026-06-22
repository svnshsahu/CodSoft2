import React from 'react'


//ab agar aap chahte hai niche har bar propsx.channel na likhna pade toh : function Cards({channel , txt="visit me"}) {  } :: ab aap channel aur txt direct use kar sakte hai ...... txt ki default value = visit me agar niche likhne mein readability ho rahi toh !! 
function Cards(propsx ) { //isko react bydefault PROPS bolta hai 
    // console.log(props); abhi props empty hai kyuki jab ham abhi cards call kie hai toh koi input nahi die hai
    console.log(propsx);
    
    
    return (
        <>
            <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
                <img
                    src="https://picsum.photos/301"
                    alt=""
                    className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
                />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">Lorem</h2>
                        <p className="text-gray-400">
                            {/* agar kisi ke pas channel nahi hai toh waha kuch nahi aaega treats  like a "" */}
                            {propsx.channel || "visit"} 
                            
                            {/* is || ka matlab agar koi banda man lo koi value hi na pass kare toh ye aa jaye by default  */}
                             LLLLLLLLLorem helllllll ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
                            tempora ipsum soluta amet corporis accusantium aliquid consectetur
                            eaque!
                        </p>
                    </div>
                    <button
                        type="button"
                        className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
                    >
                        Read more
                    </button>
                </div>
            </div>
        </>
    )
}

export default Cards
