import React from 'react'
import {  Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Bns from './Components/Bns';
import Bnss from './Components/Bnss';

const App = () => {
  return (
    <div> 
    
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bns" element={<Bns />} />
      <Route path="/bnss" element={<Bnss />} />

      


      </Routes>
    
   
      </div>
    
  )
}

export default App