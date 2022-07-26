import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import ShanghaiImage from '../../assets/images/cities/shanghai.jpg'
import LondonImage from '../../assets/images/cities/london.jpg'
import BaliImage from '../../assets/images/cities/bali.jpg'

function Hotels() {

  const images = [
    { src: LondonImage },
    { src: ShanghaiImage },
    { src: LondonImage },
    { src: BaliImage },
    { src: LondonImage },
    { src: ShanghaiImage },
  ]

  return (
    <>
      <Container>
        <div className="hotel-desc">
          <div className="d-flex align-item-center justify-content-between">
            <h1 className='hotel-desc--title'>Grand Hotel</h1>
            <Button>Reserve or Book now!</Button>
          </div>
          <div className="hotel-desc__address">
            <i className="fa-solid fa-location-dot"></i>
            <span>101 Street Berlin</span>
          </div>
          <span className='hotel-desc--distance'>Excellent Location - 500m from center</span>
          <span className='hotel-desc--priceHighlight'>Book a stay over $120 at this property and get a free airport taxi.</span>

          <div className="hotel-desc__images">
            <Row>
              {
                images.map((photo: any) => (
                  <Col lg={4}>
                    <div className="hotel-desc__images-wrapper">
                      <img src={photo.src} alt="" />
                    </div>
                  </Col>
                ))
              }
            </Row>

          </div>
          <div className="hotel-desc__details">
            <div className="hotel-desc__details--texts">
              <h1>Stay in New Hotel</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius blanditiis molestiae sequi eaque. Odio porro doloremque similique cum? Nam tenetur quaerat amet eum minus non saepe rem fuga sit, autem iure voluptatem odit temporibus dolorem quasi voluptate quas obcaecati adipisci natus et minima veritatis aut libero. Id consequuntur nesciunt veniam aut quo ipsam cumque ut saepe assumenda ullam, aliquid nam in nemo soluta pariatur impedit, molestiae expedita quae neque qui itaque voluptatem esse beatae reprehenderit. Ullam explicabo quo nam magni. Ullam nobis rem maiores eos, nesciunt obcaecati quidem nostrum, accusamus vitae optio architecto nam non? Doloremque tempore voluptates aperiam magni.
              </p>
            </div>
            <div className="hotel-desc__details--price">
              <h1>Perfect for 9-night stay!</h1>
              <span>
                This property has 4.5 rating
              </span>
              <h2>
                <strong>$300</strong> <span>(9 nights)</span>
              </h2>
              <Button>Reserve or Book Now!</Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Hotels