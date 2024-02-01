import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App