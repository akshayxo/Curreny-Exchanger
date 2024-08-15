import { useState } from 'react'
import InputBox from './Components/InputBox'
import useCurrencyInfo from './Hooks/useCurrencyInfo';
// import './App.css'

function App() {
  const BackgroundImage = 'https://static.vecteezy.com/vite/assets/main-masthead-375-U4xKun4u.webp'

  const [fromCurrency, setFromCurrency] = useState("usd");
  const [fromAmount, setFromAmount] = useState(0);
  const [toCurrency, setToCurrency] = useState('inr');
  const [toAmount, setToAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(fromCurrency);
  const currencyArr = Object.keys(currencyInfo);
  

  const convert = ()=>{
    if(fromCurrency === toCurrency){
      setToAmount(fromAmount);
    }else{
      setToAmount(fromAmount * currencyInfo[toCurrency]);
    }
  }
  return (
    <>
      <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${BackgroundImage})` }}>
          <div className=' w-full'>
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form onSubmit={(e)=>{
                e.preventDefault();
                convert();
              }}>
              <div className='w-full mb-1'>
                <InputBox label='From'
                  currenyArr={currencyArr}
                  value={fromAmount}
                  currentCurrency={fromCurrency}
                  onCurrencyChange={(currency) => setFromCurrency(currency)}
                  onAmountChange={(amount) => setFromAmount(amount)}
                  />
              </div>
              <div > 
                <button type='button' className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'> swap</button>
              </div>
              <div className='w-full mt-1 mb-4'>
                <InputBox label='To'
                  currenyArr={currencyArr}
                  value={toAmount}
                  currentCurrency={toCurrency}
                  onCurrencyChange={(currency) => setToCurrency(currency)}
                  />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                convert</button>
              </form>
            </div>
          </div> 
      </div>
    </>
  )
}

export default App
