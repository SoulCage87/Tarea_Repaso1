import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavBar } from './Components/NavBar'
function App() {
 

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<NavBar />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
