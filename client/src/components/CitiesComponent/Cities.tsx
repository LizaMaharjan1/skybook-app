import React, { useEffect, useState } from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import ShanghaiImage from '../../assets/images/cities/shanghai.jpg'
import LondonImage from '../../assets/images/cities/london.jpg'
import BaliImage from '../../assets/images/cities/bali.jpg'
import axiosInstance from '../../axios/Axios'
import axios from 'axios'

function CitiesComponent() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const getHotelByCity = async () => {
        const response = await axios.get("http://localhost:8800/api/hotels/countByCity?cities=Bali,London,Shanghai")
        setData(response.data)
    }
    useEffect(() => {
        getHotelByCity()
    }, [])
    
    return (
        <div className='cities mb-5'>
            {
                loading ? "Loading Please Wait!!" : (
                <Row>
                <Col md={4}>
                    <div className="cities-wrap">
                        <Image src={ShanghaiImage} alt="Hotel image" className='img-fluid' />
                        <div className="cities-info">
                            <h3 className="cities-info_title">Shanghai</h3>
                            <p className="cities-info_hotel">{data[2]} properties</p>
                        </div>
                    </div>

                </Col>
                <Col md={4}>
                    <div className="cities-wrap">
                        <Image src={LondonImage} alt="Hotel image" className='img-fluid' />
                        <div className="cities-info">
                            <h3 className="cities-info_title">London</h3>
                            <p className="cities-info_hotel">{data[1]} properties</p>
                        </div>
                    </div>

                </Col>
                <Col md={4}>
                    <div className="cities-wrap">
                        <Image src={BaliImage} alt="Hotel image" className='img-fluid' />
                        <div className="cities-info">
                            <h3 className="cities-info_title">Bali</h3>
                            <p className="cities-info_hotel"> {data[0]} properties</p>
                        </div>
                    </div>

                </Col>
            </Row>)}
        </div>
    )
}

export default CitiesComponent