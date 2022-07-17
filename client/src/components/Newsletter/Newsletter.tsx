import React from 'react'
import { Button, Col, Form, Image, Row } from 'react-bootstrap'
import NewsletterImg from '../../assets/images/news.jpg'

function Newsletter() {
    return (
        <div>
            <h4 className="section-head mb-3">Newsletter</h4>
            <div className='newsletter d-flex justify-content-center align-items-center bg-white'>
                <Image src={NewsletterImg} alt='News letter' className='img-fluid' />
                <div className="newsletter-form">
                    <h5 className='mb-3 fw-bolder'>Subscribe to our Newsletter!</h5>
                    <p className='mb-1'>Subscribe to our newsletter and stay updated of the lated deals and discounts.</p>
                    <Form.Control placeholder='Enter email address' className='mb-3' />
                    <Button>Subscribe</Button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter