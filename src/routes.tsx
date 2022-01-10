import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import HomePage from './pages/Register';

export default function AppRoutes() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
  )
}