import React from 'react'

const card = (props) => {
  return (
    <div>
       <a className='' href={props.elem.url} target='_blank'>
        <div className='h-45 overflow-hidden rounded-xl'>
        <img  className='h-full w-50 rounded-xl hover:scale-105 transition-transform duration-200 object-cover' src={props.elem.download_url} alt="" />
      </div>
      <h2 className='font-bold'>{props.elem.author}</h2>
      </a>
    </div>
  )
}

export default card