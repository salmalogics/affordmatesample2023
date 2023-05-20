import React from 'react'
import {Routes,Route}from 'react-router-dom'

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Main from './components/Main'


function Router() {
  return (
    <div>
      <Navbar/>
        <Routes>
            <Route path="/" element={<Main/>} />
        
           

        </Routes>
        <Footer/>
      
    </div>
  )
}

export default Router
