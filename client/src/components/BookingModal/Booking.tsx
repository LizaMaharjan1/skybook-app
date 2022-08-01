import axios from 'axios';
import { setDefaultResultOrder } from 'dns';
import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router';

import API from "../../api-config";


function Booking(props: any) {

    const [data, setData] = useState<any>()
    const [loading, setLoading] = useState(false)
    const [successModal, setSuccessModal] = useState(false)
    const [error, setError] = useState()
    const [selectedRooms, setSelectedRooms] = useState<any>([])

    const getHotelRoom = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`${API.hotel}/room/${props.hotelId}`)
            setData(response?.data)
        } catch (error: any) {
            setError(error)
        }
        setLoading(false)
    }

    useEffect(() => {
        getHotelRoom()
    }, [])


    const handleSelectedRooms = (e: any) => {
        const selected = e.target.checked
        const values = e.target.value
        setSelectedRooms(selected ? [...selectedRooms, values] : selectedRooms.filter((item: any) => (
            item !== values
        )))
    }

    //date
    const sDate = localStorage.getItem('startDate')
    const eDate = localStorage.getItem('endDate')

    const getDatesInRange = (startDate: any, endDate: any) => {
        const start = new Date(startDate)
        const end = new Date(endDate)
        const dates = new Date(start.getTime())

        let dateList = []

        while (dates <= end) {
            dateList.push(new Date(dates).getTime())
            dates.setDate(dates.getDate() + 1)
        }
        return dateList
    }
    const allDates = getDatesInRange(sDate, eDate)
    const isAvailable = (roomNumber: any) => {
        const isFound = roomNumber.unavailableDates.some((date: any) =>
            allDates?.includes(new Date(date).getTime())
        )
        return !isFound
    }

    const navigate = useNavigate()
    const completeReservation = async () => {
        try {
            await Promise.all(selectedRooms.map(async (roomId: any) => {
                const response = await axios.put(`${API.room}/available/${roomId}`, { date: allDates })
                if (response.status === 200) {
                    setSuccessModal(true);
                }
            }))
        } catch (error: any) {
            setError(error)
        }
        props.hide()
    }

    const handleBookedClose = () => {
        setSuccessModal(false);
        navigate('/')
    }



    return (
        <>
            <Modal show={props.show} onHide={props.hide} centered className='bookingModal'>
                <Modal.Header>
                    <Modal.Title>Reserve your room!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="book--items">
                        <p>Select your rooms:</p>
                        {
                            data?.map((item: any, index: number) => (
                                <div className='book-wrapper' key={index}>
                                    <div className="book--option">
                                        <div className="book--option__title">{item?.title}</div>
                                        <div className="book--option__desc">{item?.description}</div>
                                        <div className="book--option__maxPeople">Max people: <strong>{item?.maxPeople}</strong></div>
                                        <div className="book--option__price">Price: {item?.price}</div>
                                    </div>
                                    <div className="book--rooms">
                                        {item?.roomNumbers.map((roomNumber: any) => (
                                            <div className="book--rooms__indiv-room">
                                                <label>{roomNumber.number}</label>
                                                <input type="checkbox" className='roomCheck' value={roomNumber._id} onChange={handleSelectedRooms} disabled={!isAvailable(roomNumber)} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={completeReservation}>
                        Reserve Now!
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={successModal} onHide={() => setSuccessModal(false)} centered className='bookingModal'>
                <Modal.Header>
                    <Modal.Title>Booked!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Your Booking was successfull. 
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleBookedClose}>
                        Back to home
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Booking