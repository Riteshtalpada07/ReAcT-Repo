
import { createContext } from 'react'
import { useState } from 'react'


export const themeData = createContext()

const themeContext = (props) => {
    const [theme, setTheme] = useState('light')
  return (
    <div>
        <themeData.Provider value={[theme,setTheme]}>
            {props.children}
        </themeData.Provider>
    </div>
  )
}

export default themeContext

