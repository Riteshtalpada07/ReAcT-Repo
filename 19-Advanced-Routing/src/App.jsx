import React from 'react'
import Nav from './components/nav'
import Footer from './components/footer'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import NotFound from './pages/NotFound'
import Men from './pages/men'
import Women from './pages/women'
import Cources from './pages/cources'
import { Route, Routes } from 'react-router-dom'
import CourcesDetails from './pages/CourcesDetails'
import Nav2 from './components/nav2'


const App = () => {
  return (
    <div className='h-screen flex flex-col
    justify-between bg-gray-500 text-white'>
      <Nav />
      <Nav2 />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/cources' element={<Cources/>} />
        <Route path='/cources/:id' element={<CourcesDetails />}/>
        
        <Route path='/contact' element={<Contact/>}>
         <Route path='men' element={<Men/>}/>
         <Route path='women' element={<Women/>}/>
         
        </Route>

         

         <Route path='*' element={<NotFound/>}/>
         
      </Routes>
      <Footer/>
    </div>
  )
}

export default App