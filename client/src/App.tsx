import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router';
import MainLayout from './pages/Main/MainLayout';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <MainLayout />
    </div>
  );
}

export default App;
