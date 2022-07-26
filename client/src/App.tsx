import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.scss';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ContactUs from './pages/Contact/ContactUs';
import Hotels from './pages/Hotels/Hotels';
import List from './pages/List/List';
import MainLayout from './pages/Main/MainLayout';

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false)

  const logOut = () => {
    setIsLoggedin(false)
    localStorage.removeItem("token")
  }
  useEffect(() => {

    const getIsAdmin: any = localStorage.getItem("isAdmin");
    const state = JSON.parse(getIsAdmin);
    console.log(state);

    setIsLoggedin(state)
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route index element={<MainLayout />} />
        <Route path='/hotels' element={<List />} />
        <Route path='/hotels/id' element={<Hotels />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/login' element={<Login setIsLoggedin={setIsLoggedin} />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div >
  );
}

export default App;
