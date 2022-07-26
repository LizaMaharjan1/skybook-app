import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

function ContactUs() {
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [])


  return (
    <>
      <Header />
      <div>ContactUs</div>
      <Footer />
    </>

  )
}

export default ContactUs