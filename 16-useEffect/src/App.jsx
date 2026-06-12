import React, { useEffect, useState } from 'react'

const App = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
    
  const aChange = ()=>{
    console.log("A change");
    
  }

  const bChange = ()=>{
    console.log("B change");
    
  }

  useEffect(() => {
    aChange()
    
  }, [a])

  useEffect(() => {
    bChange()
    
  }, [b])
  
  return (
    <div>
      <h1>A : {a} <br /> B : {b}</h1>

      <button onClick={()=>{
           setA(a+1)
      }}>Change A</button>

      <button
      onClick={()=>{
        setB(b-1)
      }}>Change B</button>
    </div>
  )
}

export default App