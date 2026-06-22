import {useEffect , useState} from 'react'

function useCurrencyInfo(currency){

    const [ data , setData] = useState({}) //empty object dal dete hai ki in case agar fetch krne se kuch nahi aaya tb bhi hamara loop chal paye crash na ho

    useEffect(()=>{
        fetch(
            `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
        )
        .then((res)=> res.json() )
        .then((res) => setData(res[currency]))
    },[currency]) // ki jb bhi currency ki value change ho toh

    return data
}

export default useCurrencyInfo   



