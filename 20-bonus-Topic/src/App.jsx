import React, { useState } from 'react'
import Nav from './components/nav'

const App = () => {
  const [theme, setTheme] = useState('light')
  return (
    <div>
      <h1>Theme is : {theme}</h1>
      <Nav theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App