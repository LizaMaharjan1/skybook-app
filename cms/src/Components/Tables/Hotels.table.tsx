import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import axiosInstance from '../../api/axios'
import { getAllHotels } from '../../redux/actionCreator/hotelActionCreator'
import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks'
import ConfirmationModal from '../Modals/ConfirmationModal'

function HotelsTable() {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [hotelId, setHotelId] = useState<number>(0)

    const [error, setError] = useState('')

    const dispatch = useAppDispatch()

    const closeModal = () => {
        setShowModal(false)
    }

    const deleteHotel = async (hotelId: any) => {
        try {
            const response = await axiosInstance.delete(`/hotels/${hotelId}`);
            if (response.status === 200) {
                setShowModal(false)
                dispatch(getAllHotels({}));
            }
        } catch (error: any) {
            setError(error)
        }
    }

    useEffect(() => {
        dispatch(getAllHotels({}))
    }, [dispatch])

    const { hotelData, hotelLoading } = useAppSelector((state) => state.hotelsReducer)

    return (
        <div>
            <ConfirmationModal
                showModal={showModal}
                title="Delete Hotel"
                description="Are you sure you want to delete this hotel?"
                action={() => deleteHotel(hotelId)}
                closeModal={closeModal}
            />
            <Table striped bordered className='mt-4'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Title</th>
                        <th>City</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        hotelData?.map((hotel: any, index: number) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{hotel.name}</td>
                                <td>{hotel.type}</td>
                                <td>{hotel.title}</td>
                                <td>{hotel.city}</td>
                                <td>
                                    <Button variant='secondary' className='me-3'>Edit</Button>
                                    <Button onClick={()=>{
                                        setShowModal(true);
                                        setHotelId(hotel._id)
                                    }} variant='danger'>Delete</Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default HotelsTable