import React from 'react'
import { Container } from 'react-bootstrap'
import Banner from '../../components/Banner/Banner'
import BrowserPropertyType from '../../components/BrowsePropertyType/BrowserPropertyType'
import CitiesComponent from '../../components/CitiesComponent/Cities'
import Newsletter from '../../components/Newsletter/Newsletter'
import SearchBar from '../../components/SearchBar/SearchBar'

function HomePage() {
  return (
    <>
      <Banner />
      <SearchBar />
      <main>
        <Container>
          <CitiesComponent />
          <BrowserPropertyType />
          <Newsletter />
        </Container>
      </main>


    </>
  )
}

export default HomePage