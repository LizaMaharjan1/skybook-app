import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Alert, Button, Col, Form, Image, InputGroup, Row } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo-rounded.png'


function Login() {
    const navigate = useNavigate()

    useEffect(() => {
        if(localStorage.getItem("token")) {
            navigate("/");
        }
    }, [])
    
    
    const [alertShow, setAlertShow] = useState<boolean>(false)
    const [errorMsg, setErrorMsg] = useState<string>('')
    const [errorObj, setErrorObj] = useState<any>()

    const [user, setUser] = useState<any>({
        userName: '',
        password: ''
    })

    const loginHandler = (e: any) => {
        e.preventDefault()
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        if (user.userName === '' || user.password === '') {
            setAlertShow(true);
            setErrorMsg('Please fill all the feilds')
        }
    }

    const authenticate = () => {
        localStorage.setItem("token", "etrwtreytqrwyqrweytqrweywerqyut")
    }

    const submitLogin = async (e: any) => {
        e.preventDefault();
        console.log("click");

        const payload = {
            userName: user.userName,
            password: user.password
        }
        try {
            const response: any = await axios.post('http://localhost:8800/api/auth/login', payload)
            if (response.status === 200) {
                authenticate();
                navigate("/")
            }

        } catch (error) {
            setErrorObj(error);
            setAlertShow(true);
            setTimeout(() => {
                setAlertShow(false);
            }, 4000);
            setErrorMsg(errorObj?.message);
        }
    }


    return (
        <div className='auth-wrapper'>
            {
                alertShow && <Alert variant='danger'>
                    {errorMsg}
                </Alert>
            }

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
                        <Form onSubmit={submitLogin}>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon2"><i className="fa-solid fa-user"></i></InputGroup.Text>
                                <Form.Control
                                    placeholder="Username"
                                    type='text'
                                    value={user.userName}
                                    name='userName'
                                    onChange={loginHandler}
                                    required
                                />
                            </InputGroup>
                            <InputGroup>
                                <InputGroup.Text id="basic-addon2"><i className="fa-solid fa-lock"></i></InputGroup.Text>
                                <Form.Control
                                    placeholder="Password"
                                    type='password'
                                    value={user.password}
                                    name='password'
                                    onChange={loginHandler}
                                    required
                                />
                            </InputGroup>
                            <Button type='submit' className='mt-3 d-block w-100'>Login</Button>
                            <h6 className='mt-4'>Don't have an account? <Link to='/register' className='text-info text-decoration-none'>Register</Link></h6>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Login