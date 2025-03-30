import React, { useState } from 'react'
import './App.css' // Make sure to import the CSS file

const App = () => {
  const [data, setData] = useState('');
  const [count, setCount] = useState(0)

  async function getAdvice() {
    const api = await fetch('https://api.adviceslip.com/advice');
    const data = await api.json();
    setData(data.slip.advice)
    setCount((c) => c + 1);
  }
  
  return (
    <div className="app-container">
      <div className="advice-container">
        <h1>{data || 'Click the button to get some advice'}</h1>
        <button className="advice-button" onClick={getAdvice}>Get Advice</button>
      </div>
      <div className="counter">
        You have read <span className="counter-number">{count}</span> pieces of advice
      </div>
    </div>
  )
}

export default App