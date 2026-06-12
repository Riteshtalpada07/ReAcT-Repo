import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from './components/card'

const App = () => {

const [userData, setUserData] = useState([])
const [index, setIndex] = useState(1)

const getData = async ()=>{
  const res =  await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`);

  setUserData(res.data)  
}

useEffect(() => {
  getData()
}, [index])


let printData = <h3 className='text-gray-400 text-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
'>Loading....</h3>

if(userData.length > 0){
  printData = userData.map(function(elem,idx){
    
    return <div key={idx}>
      <Card elem={elem} />
    </div>

  })
}

  return (
    <div className='h-screen bg-black p-4 text-white overflow-auto '>
      <div className='flex flex-wrap justify-between gap-5 p-5'>
        {printData}
      </div>
      <div className='bottom-0 flex justify-center items-center p-4 '>
        <button 
         onClick={()=>{
          if(index > 1){
          setIndex(index - 1)
          setUserData([])
          }
        }}
        style={{opacity :  index == 1 ? 0.5 : 1}}
        className='bg-amber-300 text-black rounded px-4 py-1 m-4 active:scale-95 cursor-pointer'>Prev</button>
        <h4>Page {index}</h4>
        <button 
        onClick={()=>{
          setIndex(index + 1)
          setUserData([])
        }}
        
        className='bg-amber-300 text-black rounded px-4 py-1 m-4  active:scale-95 cursor-pointer'>Next</button>
      </div>
    </div>
  )
}

export default App