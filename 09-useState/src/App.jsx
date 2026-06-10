import React, { useState } from 'react'

const App = () => {
    const [a, setA] = useState(0)
    const incrementA = () => {
      setA(a + 1)
    }
    const decrementA = () => {
      setA(a - 1)
    }
    const resetA = () => {
      setA(0)
    }

  return (
    <div>
      <h1>Value of a : {a}</h1>
      <button onClick={incrementA}>Increment</button>
      <button onClick={decrementA}>Decrement</button>
      <button onClick={resetA}>Reset</button>
    </div>
    
  )
}

export default App

