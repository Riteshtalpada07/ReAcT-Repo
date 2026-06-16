import React from 'react'
import { Link } from 'react-router-dom'

const nav = () => {
  return (
    <div>
        <div className='flex justify-between p-4 bg-black text-white' >
        <h2>Ritesh-Talpada</h2>
        <div className=''>
            <Link to='/' className='px-3'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact' className='px-3'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default nav