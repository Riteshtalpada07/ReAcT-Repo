import  { useState } from 'react'

const App = () => {
  
  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({title,details});
    setTask(copyTask)
     
    setTitle('')
    setDetails('')
    
  }

  const deleteNote = (idx) =>{
     const copyTask = [...task]
     copyTask.splice(idx,1)
     setTask(copyTask)
     
  }
  

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  return (
    <div className='h-screen bg-black text-white lg:flex '>
        
        <form 
        onSubmit={(e)=>{
          submitHandler(e)
        }} 
        className="flex flex-col items-start gap-4 lg:w-1/2 w-full p-4">

            <h1 className='text-xl font-bold'>Add Notes</h1>

            {/* first input for title */}
            
              <input 
              type="text" 
              placeholder='Enter Notes Heading'
              className='w-full px-3 py-2  rounded outline-none bg-gradient-to-r from-purple-500 to-pink-500'
              value={title}
              onChange={(e)=>{
                setTitle(e.target.value)
                
              }}
              required
              />

            {/* input for notes details */}
              <textarea 
              placeholder='Write Details'
              className='w-full px-3 py-2 h-30  bg-gradient-to-r from-purple-500 to-pink-500  rounded outline-none'
              value={details}
              onChange={(e)=>{
                setDetails(e.target.value)
              }}
              required>
              </textarea> 
       
            <button 
            className=' w-full py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 cursor-pointer active:scale-98'>
              Add Notes
              </button> 

      </form>

        <div className="w-full p-4 lg:w-1/2 lg:border-l-2">

          <h1 
          className='text-xl font-bold'>
            Recent Notes
          </h1>

          <div 
          className=' h-full flex flex-wrap items-start gap-5 overflow-auto pb-7 mt-3'>

            {task.map(function(elem,idx){
               return (

                  <div key={idx} 
                  className="box flex flex-col items-start justify-between relative h-52 w-40 rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-400 p-3  overflow-auto shadow-lg shadow-cyan-500/20 ">
                 
                        <div>
                          <h3 
                          className=' font-bold text-xl  uppercase p-1'>{elem.title}
                          </h3>

                          <p 
                          className='leading-tight text-gray-200 pt-1 '>
                            {elem.details} 
                          </p>
                        </div>

                          <button 
                          onClick={(e) =>{
                            deleteNote(idx)
                          }}
                          className='w-full bg-red-500 rounded-2xl hover:bg-red-400 cursor-pointer mt-2 active:scale-95'>Delete
                          </button>

                   </div>
               )
            })}
            </div>
         </div>
      </div>
      
  )
}

export default App