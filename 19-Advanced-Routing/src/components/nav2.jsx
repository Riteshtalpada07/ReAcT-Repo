import React from 'react'
import { useNavigate } from 'react-router-dom'

const nav2 = () => {
    let navigate = useNavigate();
  return (
    <div>
       <button onClick={()=>{
          navigate(+1)
        }} 
        className='bg-fuchsia-400 rounded p-2 active:scale-95'>Next</button>

        <button onClick={()=>{
          navigate('/')
        }} 
        className='bg-fuchsia-400 rounded p-2 active:scale-95 m-2'>GoTo Home Page</button>

        <button onClick={()=>{
          navigate(-1)
        }} 
        className='bg-fuchsia-400 rounded p-2 active:scale-95'>Back</button>
    </div>
  )
}

export default nav2