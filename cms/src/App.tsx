import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './Layouts/Header';
import Sidebar from './Layouts/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
    </div>
  );
}

export default App;
