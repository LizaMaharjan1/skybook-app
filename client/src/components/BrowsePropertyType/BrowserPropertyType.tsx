import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Image, Row } from 'react-bootstrap'
import ShanghaiImage from '../../assets/images/cities/shanghai.jpg'
import LondonImage from '../../assets/images/cities/london.jpg'
import BaliImage from '../../assets/images/cities/bali.jpg'
import axios from 'axios'

function BrowserPropertyType() {

    const [propertyData, setPropertyData] = useState<any>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const images = [
        LondonImage,
        ShanghaiImage,
        LondonImage,
        BaliImage,
    ]

    const getProperty = async () => {
        try {
            const response = await axios.get("http://localhost:8800/api/hotels/countByType")
            setPropertyData(response && response.data)
            console.log(propertyData);
        } catch (error: any) {
            setError(error)
        }
    }
    useEffect(() => {
        getProperty()
    }, [])

    return (
        <div className='mb-5'>
            <h4 className="section-head mb-3">Browse By Property Type</h4>
            <div className="card-section">
                {
                    loading ? "Loading Data. Please Wait!" : (
                        <Row>
                            {
                                propertyData && images.map((img, index) => (
                                    <Col md={3} key={index}>
                                        <div className="card card-section-propertyCard">
                                            <div className="card-image">
                                                <Image src={img} alt="Hotel image" className='img-fluid' />
                                            </div>
                                            <Card.Body>
                                                <Card.Title>{propertyData[index]?.type}</Card.Title>
                                                <Card.Text>{propertyData[index]?.count} {propertyData[index]?.type}</Card.Text>
                                                <Button className='mt-3'>Explore</Button>
                                            </Card.Body>
                                        </div>
                                    </Col>
                                ))
                            }
                        </Row>)}
            </div>

        </div>
    )
}

export default BrowserPropertyType