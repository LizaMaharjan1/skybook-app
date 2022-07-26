import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ContactUs from './pages/Contact/ContactUs';
import Hotels from './pages/Hotels/Hotels';
import HomePage from './pages/Homepage/HomePage';
import List from './pages/List/List';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/hotels' element={<List />} />
        <Route path='/hotels/id' element={<Hotels />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div >
  );
}

export default App;
