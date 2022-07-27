import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router'
import { Button, Col, Container, Row } from 'react-bootstrap'

import API from "../../api-config";

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Loader from '../../components/Loader/Loader';

function Hotels() {

  const [data, setData] = useState<any>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)


  const location: any = useLocation();
  const id = location.pathname.split('/')[2]

  const hotelDetails = async () => {
    const response = await axios.get(`${API.hotel}/find/${id}`)
    setData(response.data)
  }

  useEffect(() => {
    hotelDetails()
  }, [])
  
  return (
    <>
      <Header />
      <Container>
        {
          loading ?
            <div className='h-100 d-flex align-items-center justify-content-center'>
              <Loader />
            </div> 
            :
            <div className="hotel-desc">
              <div className="d-flex align-item-center justify-content-between">
                <h1 className='hotel-desc--title'>{data.name}</h1>
                <Button>Reserve or Book now!</Button>
              </div>
              <div className="hotel-desc__address">
                <i className="fa-solid fa-location-dot"></i>
                <span>{data.address}</span>
              </div>
              <span className='hotel-desc--distance'>Excellent Location - {data.distance}m from center</span>
              <span className='hotel-desc--priceHighlight'>Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi.</span>

              <div className="hotel-desc__images">
                <Row>
                  {
                    data.photos?.map((photo: any) => (
                      <Col lg={4}>
                        <div className="hotel-desc__images-wrapper">
                          <img src={photo?.src} alt="Hotel Images" />
                        </div>
                      </Col>
                    ))
                  }
                </Row>

              </div>
              <div className="hotel-desc__details">
                <div className="hotel-desc__details--texts">
                  <h1>{data.title}</h1>
                  <p>
                    {data.description}
                  </p>
                </div>
                <div className="hotel-desc__details--price">
                  <h1>Perfect for 9-night stay!</h1>
                  <span>
                    This property has 4.5 rating
                  </span>
                  <h2>
                    <strong>$300</strong> <span>(9 nights)</span>
                  </h2>
                  <Button>Reserve or Book Now!</Button>
                </div>
              </div>
            </div>
        }
      </Container>
      <Footer />
    </>
  )
}

export default Hotels