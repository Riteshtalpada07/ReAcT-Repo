import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Nav from './components/nav'
const App = () => {
  return (
    <div className='bg-gray-600  h-screen text-white'>
      <Nav />
      <div className=' h-[90%] flex justify-center items-center'>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>}/>

      </Routes>
      </div>
      
      
    </div>
  )
}

export default App