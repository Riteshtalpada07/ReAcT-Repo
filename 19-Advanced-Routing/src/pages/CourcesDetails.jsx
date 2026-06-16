import React from 'react'
import { useParams } from 'react-router-dom'

const CourcesDetails = () => {
    const params = useParams();

    console.log(params.id);
    
  return (
    <div>
        <h1 className='text-2xl font-bold text-center'>{params.id} Cource Details Page</h1>
    </div>
  )
}

export default CourcesDetails