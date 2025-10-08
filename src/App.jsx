import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Blogs from './components/Blogs'
import About from './components/About'
import Gallery from './components/Gallery'

const App = () => {
  return (
    <div>
 <BrowserRouter>
 <Navbar/>
 <Routes>

  <Route path='/' element={<Home/>}/>
  <Route path='/' element={<Home/>}/>
 <Route path='/blogs' element={<Blogs/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/gallery' element={<Gallery/>}/>
  


 </Routes>
 
 </BrowserRouter>

 <div>
  
 </div>
    </div>
  )
}

export default App