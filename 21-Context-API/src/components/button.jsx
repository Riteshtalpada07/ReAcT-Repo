import React from 'react'
import { useContext } from 'react'
import { themeData } from '../context/themeContext'

const button = () => {
    
    const [theme,setTheme] = useContext(themeData)
    const changeTheme  = ()=>{
     setTheme('dark')
    }
  return (
    <div>
        <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default button