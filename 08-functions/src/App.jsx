import React from 'react'

const App = () => {
  
   const handleClick = () => {
      let array = ["React", "JavaScript", "HTML", "CSS"];
      let i = 0;
      setInterval(() => {
        console.log(array[i]);
        i = (i + 1) % array.length; // Loop back to the start of the array
      }, 1000);
    }

  return (
   
    <div>
      <button onClick={handleClick} className='bg-blue-500 text-white px-4 py-2 rounded'>
        Click me
      </button>
    </div>
  )
}

export default App