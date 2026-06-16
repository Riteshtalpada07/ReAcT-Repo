import {  useState } from "react"


const Top = ({tasks,setTasks}) => {

        const [task, setTask] = useState("")

        const handleSubmit=(e)=>{
           e.preventDefault();
           if(!task.trim()) return;
           setTasks([...tasks,task])
           setTask("")
        }
  return (
    <div className='h-15 w-full mb-3 px-1'>
      
      <form
      onSubmit={handleSubmit}  
      className='h-15 w-full flex items-center justify-between' >
      
              <input 
              onChange={(e)=>{
                setTask(e.target.value)
              }}
              value={task}
              type="text" placeholder='Add a task...' 
              className='w-[77%] bg-white rounded-3xl px-3 py-2 placeholder:text-gray-500 focus:outline-none cursor-text text-black' required />
            
              <button 
              type="submit"
              className='bg-black px-3 py-2 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95' 
              >
              ADD
              </button>
      
      </form>

    </div>
  )
}

export default Top