import React from 'react'
import Nav2 from './nav2'
import { useContext } from 'react'
import { themeData } from '../context/themeContext'

const nav = () => {

    const [theme] = useContext(themeData)
  return (
    <div className={theme}>
        <h2>Ritesh</h2>
       <Nav2 />
    </div>
  )
}

export default nav