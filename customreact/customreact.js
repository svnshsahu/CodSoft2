function customRender(reactElement , container){
//pehle dom elementcreate karte the aur fir use jaha inject karna hai waha inject karte the .append likh ke 

    // const domElement = document.createElement(reactElement.type)   //.type se ye fayda ho gaya ki kaun si tag append krni hai
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute("href" , reactElement.props.href)
    // domElement.setAttribute("target" , reactElement.props.target)
    // //isme dikkat ye hai ki ham bas 2 hi setAttribute de rhe but ek au rextra ya ek kam attribute hote toh dikkat

    // container.appendChild(domElement)



    //TOH BETTER VERSION ISE THODA MODULAR YA LOOP LAGATE HAI
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children

   for (const prop in reactElement.props) {
    if(prop === "children") continue;
    domElement.setAttribute(prop , reactElement.props[prop]) 
    container.appendChild(domElement)
   }

}

//MATLAB YE HAI KI END OF THE DAY SSARI CHIZ JAISE FUNCTION HAI WO ISI MEIN CONVERT HO JATA HAI ......
const reactElement    //behind the scene koi bhi element hame render karna hai toh use react kaise dekhta hai (YE HAI WO)
 = {                    //react use tree banane ki koshish karta hai
    type : "a" ,  //type  batata hai element kis type ka hai like tag name div , para  
    props : {       //properties ..... ye aapke tag ke properties rakhta hai 
        href : "https://google.com" ,
        target : "_blank" , 
    } , 
    children : "Click me to visit google" 
}  //ye aapko milta hai react ke through
//ab jisko hamari library use karni hai use har ek element isi tarah likhna hoga

const mainContainer = document.getElementById("root")

customRender(reactElement , mainContainer)
 //method to render react ko html ke andar inject kar de mtlb #root ke andar add karde
 //pehli chiz kya inject karu
 //dusri chiz kaha inject karu