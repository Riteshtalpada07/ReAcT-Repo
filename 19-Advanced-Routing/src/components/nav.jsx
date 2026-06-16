import React from 'react'
import { Link } from 'react-router-dom'


const nav = () => {
  return (
    <div>
        <div className='flex justify-between p-4 bg-black text-white' >
        <h2 className='text-xl font-bold'>Ritesh-Talpada</h2>
        <div >
          <Link className='px-3' to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link className='px-3' to='/cources'>Cources</Link>  
          <Link to='/contact'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default nav