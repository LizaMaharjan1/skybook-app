import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import ShanghaiImage from '../../assets/images/cities/shanghai.jpg'
import LondonImage from '../../assets/images/cities/london.jpg'
import BaliImage from '../../assets/images/cities/bali.jpg'

function CitiesComponent() {
    return (
        <div className='cities mb-5'>
            <Row>
                <Col md={4}>
                    <div className="cities-wrap">
                        <Image src={ShanghaiImage} alt="Hotel image" className='img-fluid' />
                        <div className="cities-info">
                            <h3 className="cities-info_title">Shanghai</h3>
                            <p className="cities-info_hotel">52 properties</p>
                        </div>
                    </div>

                </Col>
                <Col md={4}>
                    <div className="cities-wrap">
                        <Image src={LondonImage} alt="Hotel image" className='img-fluid' />
                        <div className="cities-info">
                            <h3 className="cities-info_title">London</h3>
                            <p className="cities-info_hotel">105 properties</p>
                        </div>
                    </div>

                </Col>
                <Col md={4}>
                    <div className="cities-wrap">
                        <Image src={BaliImage} alt="Hotel image" className='img-fluid' />
                        <div className="cities-info">
                            <h3 className="cities-info_title">Bali</h3>
                            <p className="cities-info_hotel">30 properties</p>
                        </div>
                    </div>

                </Col>
            </Row>
        </div>
    )
}

export default CitiesComponent