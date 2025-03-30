import React, { useState } from 'react'
import './App.css' // Make sure to import the CSS file

const App = () => {
  const [data, setData] = useState('');
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  async function getAdvice() {
    setIsLoading(true);
    try {
      const api = await fetch('https://api.adviceslip.com/advice');
      const data = await api.json();
      setData(data.slip.advice);
      setCount((c) => c + 1);
    } catch (error) {
      console.error('Error fetching advice:', error);
    } finally {
      setIsLoading(false);
    }
  }
  
  return (
    <div className="app-container">
      <div className="advice-container">
        <h1>
          {data ? data : <span className="empty-state">Your advice will appear here</span>}
        </h1>
        <button 
          className={`advice-button ${isLoading ? 'loading' : ''}`} 
          onClick={getAdvice}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Get Advice'}
        </button>
      </div>
      <div className="counter">
        You have read <span className="counter-number">{count}</span> pieces of advice
      </div>
    </div>
  )
}

export default App