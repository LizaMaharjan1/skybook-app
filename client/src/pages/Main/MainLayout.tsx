import React from 'react'
import { Route, Routes } from 'react-router'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import ContactUs from '../Contact/ContactUs'
import HomePage from '../Homepage/HomePage'
import Hotels from '../Hotels/Hotels'

function MainLayout() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/hotels' element={<Hotels />} />
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  )
}

export default MainLayout