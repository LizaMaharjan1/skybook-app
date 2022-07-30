import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import API from '../../api-config'
import { getAllHotels } from '../../redux/actionCreator/userActionCreator'
import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks'

function HotelsTable() {
    const [data, setData] = useState([])
    const [error, setError] = useState('')

    const deleteHotel = async (id: any) => {
        try {
            await axios.delete(`${API.hotel}/${id}`)
            setData(data.filter((item: any) => item._id !== id))
        } catch (error: any) {
            setError(error)
        }
    }
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getAllHotels({}))
    }, [dispatch])

    const { hotelData, hotelLoading } = useAppSelector((state) => state.hotelsReducer)

    return (
        <div>
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
                                    <Button onClick={deleteHotel.bind(null, hotel._id)} variant='danger'>Delete</Button>
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