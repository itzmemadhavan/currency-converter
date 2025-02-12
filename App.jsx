import React,{useEffect,useState} from 'react';
import axios from "axios";



function App(){
  const [amount,setAmount]=useState(1);
  const [fromCurrency,setFromCurrency]=useState('USD');
  const [toCurrency,setToCurrency]=useState('INR');
  const [exchangeRate,setExchangeRate]=useState(null);
  const [convertAmount,setConvertAmount]=useState(null);

useEffect(()=>{
  const getExchangeRate = async ()=>{
    try{
      const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
      const respondse = await axios.get(url);
      console.log(respondse);
      setExchangeRate(respondse.data.rates[toCurrency]);
    }catch(error){
      console.error('404 error fetching data',error)
    }

  }
  getExchangeRate();

},[fromCurrency,toCurrency])

useEffect(()=>{
  if(exchangeRate !== null){
    setConvertAmount((amount * exchangeRate).toFixed(2));
  }
},[amount,exchangeRate])

const handelAmountChange=(e)=>{
const value =parseFloat(e.target.value);
setAmount(isNaN(value)? 1 : value)
}
const handelFromCurrencyChange=(e)=>{
  setFromCurrency(e.target.value)
}
const handelToCurrencyChange=(e)=>{
  setToCurrency(e.target.value)
};

return(
  <div className='box1'>
    <h1>Currency Cunverter</h1>
    <div>
      <label htmlFor="amt">Amount:</label>
      <input type="number" id="amt" value={amount} onChange={handelAmountChange} />
    </div>
<label htmlFor="fromCurrency" >From Currency :</label>
<select  id="fromCurrency" value={fromCurrency} onChange={handelFromCurrencyChange}>
  <option value="USD">USD- Unated States</option>
  <option value="EUR">Euro</option>
  <option value="GBP">British Pound</option>
  <option value="INR">Indian Rupee</option>
  <option value="AUD">Australian Dollar</option>
  <option value="CAD">Canadian Dollar</option>
  <option value="CHF">Swiss Franc</option>
  <option value="JPY">Japanese Yen</option>
  <option value="CNY">Chinese Yuan</option>
  <option value="KRW">South Korean Won</option>
  <option value="RUB">Russian Ruble</option>
  <option value="BRL">Brazilian Real</option>
  <option value="ZAR">South African Rand</option>
  <option value="MXN">Mexican Peso</option>
  <option value="SGD">Singapore Dollar</option>
  <option value="NZD">New Zealand Dollar</option>
  <option value="HKD">Hong Kong Dollar</option>
  <option value="SEK">Swedish Krona</option>
  <option value="NOK">Norwegian Krone</option>
  <option value="AED">United Arab Emirates Dirham</option>
  <option value="FJD">Fijian Dollar</option>
  <option value="PGK">Papua New Guinean Kina</option>
  <option value="KES">Kenyan Shilling</option>
  <option value="NGN">Nigerian Naira</option>
  <option value="EGP">Egyptian Pound</option>
  <option value="ZAR">South African Rand</option>
  <option value="TRY">Turkish Lira</option>
  <option value="AED">UAE Dirham</option>
  <option value="SAR">Saudi Riyal</option>
  <option value="PHP">Philippine Peso</option>
  <option value="MYR">Malaysian Ringgit</option>
</select>
<label htmlFor="toCurrency">To Currency :</label>
<select  id="toCurrency" value={toCurrency} onChange={handelToCurrencyChange}>
  <option value="USD">USD- Unated States</option>
  <option value="EUR">Euro</option>
  <option value="GBP">British Pound</option>
  <option value="INR">Indian Rupee</option>
  <option value="AUD">Australian Dollar</option>
  <option value="CAD">Canadian Dollar</option>
  <option value="CHF">Swiss Franc</option>
  <option value="JPY">Japanese Yen</option>
  <option value="CNY">Chinese Yuan</option>
  <option value="KRW">South Korean Won</option>
  <option value="RUB">Russian Ruble</option>
  <option value="BRL">Brazilian Real</option>
  <option value="ZAR">South African Rand</option>
  <option value="MXN">Mexican Peso</option>
  <option value="SGD">Singapore Dollar</option>
  <option value="NZD">New Zealand Dollar</option>
  <option value="HKD">Hong Kong Dollar</option>
  <option value="SEK">Swedish Krona</option>
  <option value="NOK">Norwegian Krone</option>
  <option value="AED">United Arab Emirates Dirham</option>
  <option value="FJD">Fijian Dollar</option>
  <option value="PGK">Papua New Guinean Kina</option>
  <option value="KES">Kenyan Shilling</option>
  <option value="NGN">Nigerian Naira</option>
  <option value="EGP">Egyptian Pound</option>
  <option value="ZAR">South African Rand</option>
  <option value="TRY">Turkish Lira</option>
  <option value="AED">UAE Dirham</option>
  <option value="SAR">Saudi Riyal</option>
  <option value="PHP">Philippine Peso</option>
  <option value="MYR">Malaysian Ringgit</option>
</select>
<div>
  <h2>Converted Amount: {convertAmount ? convertAmount : 'Loading....'} {toCurrency}</h2>
</div>
  </div>
)
}
export default App;