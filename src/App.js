import React from 'react'
import {  Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import BnsPage from './Components/BnsPage';

const App = () => {
  return (
    <div> 
    
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bns" element={<BnsPage />} />
      </Routes>
    
   
      </div>
    
  )
}

export default App