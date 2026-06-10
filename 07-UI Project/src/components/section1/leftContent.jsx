import React from 'react'
import 'remixicon/fonts/remixicon.css'
import HerroText from './HerroText'
import Arrow from './Arrow'

const leftContent = () => {
  return (
    <div className='h-full w-[30%] flex flex-col justify-between'>
      <HerroText />
      <Arrow />
    </div>
  )
}

export default leftContent