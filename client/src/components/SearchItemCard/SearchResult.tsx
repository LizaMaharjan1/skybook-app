import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ShanghaiImage from '../../assets/images/cities/shanghai.jpg'


function SearchResult(props: any) {
    return (
        <>
            <div className="resultCard">
                <img src={ShanghaiImage} alt="Hotel image" className="cardImg" />
                <div className="hotel">
                    <h2 className='hotel-title'>{props.item.name}</h2>
                    <span className="hotel-dis">{props.item.distance}m from center</span>
                    <span className="hotel-taxiP">Free airport taxi</span>
                    <span className="hotel-subTitle">
                        Air conditioning with studio
                    </span>
                    <span className="hotel-features">
                        {props.item.description}
                    </span>
                    <span className="hotel-cancel">
                        Free Cancellation
                    </span>
                </div>
                <div className="details">
                    {props.item.rating &&
                        <div className="details-rating">
                            <span>Excellent</span>
                            <Button>{props.item.rating}</Button>
                        </div>
                    }
                    <div className="details-texts">
                        <span>${props.item.cheapestPrice}</span>
                        <Link to={`/hotels/${props.item._id}`} className='btn btn-primary'>
                            See availability
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchResult