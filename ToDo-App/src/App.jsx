import React, { useEffect, useState } from 'react'
import Bottom from './component/Bottom'
import Top from './component/Top'

const App = () => {

  const [tasks, setTasks] = useState(()=>{
    return JSON.parse(localStorage.getItem("Task")) || [];
  })

  useEffect(() => {
    localStorage.setItem("Task",JSON.stringify(tasks))
  }, [tasks])
  


  return (
    <div className='h-screen bg-black text-white flex justify-center items-center'>
      <div className='h-[70%] w-[23%] rounded-2xl p-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 flex flex-col' >
        <h1 className='text-center pb-3 text-2xl font-bold'>Todo App</h1>
          <Top tasks={tasks} setTasks={setTasks}/>
          <Bottom tasks={tasks} setTasks={setTasks}/>
      </div>
    </div>
  )
}

export default App