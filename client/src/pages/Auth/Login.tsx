import React from 'react'
import { Col, Form, Image, InputGroup, Row } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import Logo from '../../assets/images/logo-rounded.png'

function Login() {
    return (
        <div className='auth-wrapper'>
            <Row className='g-0'>
                <Col md={6}>
                    <div className="auth-vid">
                        <ReactPlayer
                            url='https://cdnl.iconscout.com/lottie/premium/preview-watermark/flight-booking-app-4179010-3468962.mp4'
                            playing={true}
                            loop={true}
                            controls={false}
                            className='w-100'
                        />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="auth-form">
                        <Image src={Logo} alt='Logo' className='img-fluid' />
                        <h3>Login to access the system</h3>
                        <Form>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="Username"
                                    type='text'
                                />
                                <InputGroup.Text id="basic-addon2"><i className="fa-regular fa-envelope"></i></InputGroup.Text>
                            </InputGroup>
                            <InputGroup>
                                <Form.Control
                                    placeholder="Password"
                                    type='password'
                                />
                                <InputGroup.Text id="basic-addon2"><i className="fa-solid fa-lock"></i></InputGroup.Text>
                            </InputGroup>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Login