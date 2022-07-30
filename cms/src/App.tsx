import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './Layouts/Header';
import Sidebar from './Layouts/Sidebar';
import { Route, Routes } from 'react-router';
import Dashboard from './Modules/Dashboard';
import Login from './Modules/Login';
import Hotels from './Modules/Hotels';
import Rooms from './Modules/Rooms';
import Users from './Modules/Users';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='d-flex main-body-content'>
        <Sidebar />
        <main className='flex-grow-1 p-4 content-display'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/users' element={<Users />} />
            <Route path='/hotels' element={<Hotels />} />
            <Route path='/rooms' element={<Rooms />} />
          </Routes>
        </main>

      </div>

    </div>
  );
}

export default App;
