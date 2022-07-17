import React from 'react'
import { Route, Routes } from 'react-router'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import AboutUs from '../About/AboutUs'
import ContactUs from '../Contact/ContactUs'
import HomePage from '../Homepage/HomePage'

function MainLayout() {
  return (
    <>
        <Header />
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/contact-us' element={<ContactUs />} />
        </Routes>
        <Footer/>
    </>
  )
}

export default MainLayout