import { Trash } from 'lucide-react';


const Bottom = ({ tasks,setTasks }) => {
  const deleteTask = (idx) =>{
     setTasks(tasks.filter((_, index) => index !== idx));
  }

  return (
  <div className="card overflow-y-auto ">
  {tasks.length === 0 ? (
    <h2 className="w-full text-center">No TODOs yet</h2>
  ) : (tasks.map((task, index) => (
        <div
          key={index}
          className='flex w-full bg-white/15 backdrop-blur-lg h-14 items-center justify-between px-5 rounded-4xl mb-3 '
        >
          <input
            type="radio"
            className="w-5 h-5 accent-violet-600 cursor-pointer"
          />

          <div className='w-[75%]'>
            <h3>{task}</h3>
          </div>

          <button 
          onClick={()=>{
            deleteTask(index)
          }}
          className='active:scale-90 hover:text-white transition-all duration-300 text-black hover:bg-black/20 p-2 rounded-3xl'>
          <Trash size={18} strokeWidth={1.8} />
          </button>
        </div>
      )))}
    </div>
  );
};

export default Bottom;