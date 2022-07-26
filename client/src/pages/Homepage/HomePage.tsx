import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import Banner from '../../components/Banner/Banner'
import BrowserPropertyType from '../../components/BrowsePropertyType/BrowserPropertyType'
import CitiesComponent from '../../components/CitiesComponent/Cities'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Newsletter from '../../components/Newsletter/Newsletter'
import SearchBar from '../../components/SearchBar/SearchBar'

function HomePage() {
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [])
  return (
    <>
      <Header />
      <Banner />
      <SearchBar />
      <main>
        <Container>
          <CitiesComponent />
          <BrowserPropertyType />
          <Newsletter />
        </Container>
      </main>
      <Footer />

    </>
  )
}

export default HomePage