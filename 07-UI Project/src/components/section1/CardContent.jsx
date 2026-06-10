
const CardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full
    bg-gradient-to-t from-black/60 to-transparent w-full  p-7 flex flex-col justify-between'>

         <h2 className='bg-white font-bold rounded-full h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>

         
         
         <div>
            <p className='text-white mb-15 leading-relaxed '>{props.intro}</p>
           
           <div className='flex justify-between'>
              <button className='bg-blue-600 text-sm
            text-white font-medium rounded-full px-7 py-2'>
                {props.tag}
            </button>
            <button className='bg-blue-600 text-sm
            text-white font-medium rounded-full px-3 py-2'>
                <i className="ri-arrow-right-line"></i>
            </button>
           </div>
            
         </div>

        </div>
  )
}

export default CardContent