import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router';
import MainLayout from './pages/Main/MainLayout';
import { Container } from 'react-bootstrap';
import Login from './pages/Auth/Login';

function App() {
  const [isLoggedin, setIsLoggedin] = useState(true)
  return (
    <div className="App">
      <Routes>
        {
          isLoggedin ? (
            <Route path='/' element={<MainLayout />} />
          ) : (
            <Route path='/login' element={<Login />} />
          )
        }
      </Routes>
    </div>
  );
}

export default App;
