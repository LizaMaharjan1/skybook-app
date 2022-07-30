import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Hotels() {
  return (
    <div>
      <div className="section-head">
        <h3>Hotels</h3>
        <Link to='/' className='btn btn-primary'><i className="fa-solid fa-plus ms-2"></i> Add New</Link>
      </div>
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
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>
              <Link to='/' className='btn btn-secondary me-3'>Edit</Link>
              <Link to='/' className='btn btn-danger'>Delete</Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Hotels