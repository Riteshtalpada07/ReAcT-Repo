import React from 'react'

const nav = (props) => {

    function Change(){
        props.setTheme('dark')
    }
  return (
    <div>
        <button onClick={Change}>Change</button>
    </div>
  )
}

export default nav