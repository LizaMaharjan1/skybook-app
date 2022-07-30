import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import API from '../api-config'
import Loader from '../Components/Loader/Loader'

function Hotels() {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchAllHotel = async () => {
    try {
      const response = await axios.get(`${API.hotel}`)
      setData(response.data)
    } catch (error) {
      console.log(error);
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
                data.map((item: any , index) => (
                  <tr key={index}>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>{item.type}</td>
                    <td>{item.title}</td>
                    <td>{item.city}</td>
                    <td>
                      <Link to='/' className='btn btn-secondary me-3'>Edit</Link>
                      <Link to='/' className='btn btn-danger'>Delete</Link>
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