import axios from 'axios'
import React, { useState } from 'react'
import { Button, Col, Form, Image, InputGroup, Row } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import Logo from '../../assets/images/logo-rounded.png'

function Register() {
  const [userData, setUserData] = useState({
    userName: '',
    email: '',
    password: ''
  })

  const inputHandler = (e: any) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
    console.log(userData);
    
  }

  const submitForm = async(e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post('localhost:8800/api/auth/register', userData);
      console.log(response);
      
    } catch (error) {
      
    }
  }
  return (
    <div className='auth-wrapper'>

      <Row className='g-0 w-100'>
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
            <Form onSubmit={submitForm}>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon2"><i className="fa-solid fa-user"></i></InputGroup.Text>
                <Form.Control
                  placeholder="Username"
                  type='text'
                  value={userData.userName}
                  name='userName'
                  onChange={inputHandler}
                  required
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon2"><i className="fa-solid fa-envelope"></i></InputGroup.Text>
                <Form.Control
                  placeholder="Email"
                  type='email'
                  value={userData.email}
                  name='email'
                  onChange={inputHandler}
                  required
                />
              </InputGroup>
              <InputGroup>
                <InputGroup.Text id="basic-addon2"><i className="fa-solid fa-lock"></i></InputGroup.Text>
                <Form.Control
                  placeholder="Password"
                  type='password'
                  value={userData.password}
                  name='password'
                  onChange={inputHandler}
                  required
                />
              </InputGroup>
              <Button type='submit' className='mt-3'>Register</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Register