import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import API from '../../api-config'

function HotelsTable() {
    const [data, setData] = useState([])
    const [error, setError] = useState('')

    const fetchAllHotel = async () => {
        try {
            const response = await axios.get(`${API.hotel}`)
            setData(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    const deleteHotel = async (id: any) => {
        try {
            await axios.delete(`${API.hotel}/${id}`)
            setData(data.filter((item: any) => item._id !== id))
        } catch (error: any) {
            setError(error)
        }
    }

    useEffect(() => {
        fetchAllHotel()
    }, [])
    
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
                        data.map((item: any) => (
                            <tr key={item._id}>
                                <td>{item._id}</td>
                                <td>{item.name}</td>
                                <td>{item.type}</td>
                                <td>{item.title}</td>
                                <td>{item.city}</td>
                                <td>
                                    <Button variant='secondary' className='me-3'>Edit</Button>
                                    <Button onClick={deleteHotel.bind(null, item._id)} variant='danger'>Delete</Button>
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