// import React from 'react'


function InputBox({
    label, //from ya to
    amount,  //kitna amt le rhe 
    onAmountChange , //new amount
    onCurrencyChange ,
    currencyOptions = [] ,
    selectCurrency ="usd" , 
    amountDisable = false ,
    currencyDisable = false ,

    //className bs islie taki agar user koi css property deni ho toh 
    className = "", //last comma is allowed in JS
}) {
   

    return (
        // back ticks mein isi lie likha hai taki aagr user kuch input dena chahta ho css property toh de sake 
        //here $ bcoz its in JS backticks
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>  
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block">
                    {label} 
                    {/* here no $ bcoz this is JSX format  */}
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled = {amountDisable}
                    value = {amount}
                    //agar ye exist krta hai ki nahi ye check krne ka tarika hai && //agar wo undefined ya null ho toh rehne do AISA
                    onChange = {(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    disabled={currencyDisable}
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    
                {currencyOptions.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
