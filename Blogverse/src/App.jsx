

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import SignIn from './pages/SignIn';

export default function App() {
  return (
    <BrowserRouter>
       <Header />
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/signin' element={<SignIn/>} />
      </Routes>
    </BrowserRouter>
    
  )
}
