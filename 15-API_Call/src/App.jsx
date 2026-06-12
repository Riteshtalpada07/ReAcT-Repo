// import React from 'react'

// const App = () => {
//    async function getData(){
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
     
//     const data= await res.json();
//     console.log(data.title);
    
//   }
//   return (
//     <div>
//       <button onClick={getData}>Fetch data</button>
//     </div>
//   )
// }

// export default App


import axios from 'axios'

const App = () => {
  const getData = async () =>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    
    
    console.log(res.data);
    
  }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App