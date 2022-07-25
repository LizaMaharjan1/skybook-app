import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import ContactUs from '../Contact/ContactUs'
import HomePage from '../Homepage/HomePage'
import List from '../List/List'

function MainLayout() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/hotels' element={<List />} />
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  )
}

export default MainLayout