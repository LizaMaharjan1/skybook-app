import React from 'react'
import { Button, Card, Col, Image, Row } from 'react-bootstrap'
import ShanghaiImage from '../../assets/images/cities/shanghai.jpg'
import LondonImage from '../../assets/images/cities/london.jpg'
import BaliImage from '../../assets/images/cities/bali.jpg'

function BrowserPropertyType() {
    return (
        <div className='mb-5'>
            <h4 className="section-head mb-3">Browse By Property Type</h4>
            <div className="card-section">
                <Row>
                    <Col md={3}>
                        <div className="card">
                            <div className="card-image">
                                <Image src={LondonImage} alt="Hotel image" className='img-fluid' />
                            </div>
                            <Card.Body>
                                <Card.Title>Hotels</Card.Title>
                                <Card.Text>258 hotels</Card.Text>
                                <Button className='mt-3'>Explore</Button>
                            </Card.Body>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="card">
                            <div className="card-image">
                                <Image src={BaliImage} alt="Hotel image" className='img-fluid' />
                            </div>
                            <Card.Body>
                                <Card.Title>Apartments</Card.Title>
                                <Card.Text>258 hotels</Card.Text>
                                <Button className='mt-3'>Explore</Button>
                            </Card.Body>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="card">
                            <div className="card-image">
                                <Image src={LondonImage} alt="Hotel image" className='img-fluid' />
                            </div>
                            <Card.Body>
                                <Card.Title>Resorts</Card.Title>
                                <Card.Text>258 hotels</Card.Text>
                                <Button className='mt-3'>Explore</Button>
                            </Card.Body>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="card">
                            <div className="card-image">
                                <Image src={ShanghaiImage} alt="Hotel image" className='img-fluid' />
                            </div>
                            <Card.Body>
                                <Card.Title>Villas</Card.Title>
                                <Card.Text>258 hotels</Card.Text>
                                <Button className='mt-3'>Explore</Button>
                            </Card.Body>
                        </div>
                    </Col>
                </Row>
            </div>

        </div>
    )
}

export default BrowserPropertyType