import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ReactPlayer from 'react-player'
// import BannerVid from '../../assets/videos/banner3.mp4'

function Banner() {
  return (
    <div className='banner bg-white'>
      <Container>
        <Row>
          <Col className='d-flex justify-content-center'>
            <div className='banner-heads'>
              <h2>Hotel Room</h2>
              <h1>Booking</h1>
              <h3>Management System</h3>
            </div>
          </Col>
          <Col>
            <ReactPlayer
              url='https://cdnl.iconscout.com/lottie/premium/preview-watermark/flight-booking-app-4179010-3468962.mp4'
              playing={true}
              loop={true}
              controls={false}

            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Banner