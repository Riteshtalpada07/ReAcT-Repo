import React from 'react'
import Navbar from './navbar'
import Page1Content from './Page1Content'

const section1 = (props) => {
  return (
    <div className='h-screen w-ful'>
      <Navbar />
      <Page1Content users={props.users}/>
    </div>
  )
}

export default section1