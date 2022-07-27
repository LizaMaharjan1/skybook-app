import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Image, InputGroup, Row } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo-rounded.png'

function Register() {
  const navigate = useNavigate();
  

  useEffect(() => {
    if(localStorage.getItem("token")) {
      navigate('/login')
    }
  }, [])
  

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
    e.preventDefault()
    debugger
    try {
      const response = await axios.post('http://localhost:8800/api/auth/register', userData)
      if(response.status === 200) {
        navigate('/login')
      }
      
    } catch (error) {
      console.log(error);
      
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
            <Form onSubmit={submitForm} method='POST'>
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
              <Button type='submit' className='mt-3 d-block w-100'>Register</Button>
              <h6 className='mt-4'>Already have an account? <Link to='/login' className='text-info text-decoration-none'>Login</Link></h6>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Register