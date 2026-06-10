import React from 'react'
import Styles from './header.module.css'

const header = () => {
  return (
    <div className={Styles.box}>
        <h3>Ritesh</h3>
        <button className={Styles.btn}>Login</button>
    </div>
  )
}

export default header