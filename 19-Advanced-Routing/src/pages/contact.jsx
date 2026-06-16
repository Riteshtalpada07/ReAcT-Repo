import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const contact = () => {
  return (
    <div>
      <div className='flex justify-center gap-10 py-4'>
         <Link to='/contact/men'>Men</Link>
         <Link to='/contact/women'>Women</Link>
      </div>
      <h1 className='text-2xl font-bold text-center'>Contact</h1>
      <Outlet/>
      </div>
      
  )
}

export default contact