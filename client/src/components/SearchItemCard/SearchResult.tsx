import React from 'react'
import { Button } from 'react-bootstrap'
import ShanghaiImage from '../../assets/images/cities/shanghai.jpg'


function SearchResult() {
  return (
    <>
        <div className="resultCard">
            <img src={ShanghaiImage} alt="Hotel image" className="cardImg" />
            <div className="hotel">
                <h2 className='hotel-title'>Hotel Yak and Yeti</h2>
                <span className="hotel-dis">500m from center</span>
                <span className="hotel-taxiP">Free airport taxi</span>
                <span className="hotel-subTitle">
                    Air conditioning with studio
                </span>
                <span className="hotel-features">
                    1 King size bed and all
                </span>
                <span className="hotel-cancel">
                    Free Cancellation
                </span>
            </div>
            <div className="details">
                <div className="details-rating">
                    <span>Excellent</span>
                    <Button>4.5</Button>
                </div>
                <div className="details-texts">
                    <span>$112</span>
                    <Button variant='primary' type='submit'>See availability</Button>
                </div>
            </div>
        </div>
    </>
  )
}

export default SearchResult