import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import API from '../api-config'
import Loader from '../Components/Loader/Loader'

function Hotels() {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
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
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
    fetchAllHotel()
  }, [])
  return (
    <div>
      <div className="section-head">
        <h3>Hotels</h3>
        <Link to='/' className='btn btn-primary'><i className="fa-solid fa-plus ms-2"></i> Add New</Link>
      </div>
      {
        loading ?
          <div className='h-100 d-flex align-items-center justify-content-center'>
            <Loader />
          </div> :
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
                      <Button onClick={deleteHotel.bind(null, item._id )} variant='danger'>Delete</Button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </Table>}
    </div>
  )
}

export default Hotels