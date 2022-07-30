import React from 'react'
import { Link } from 'react-router-dom'

function Rooms() {
  return (
    <div>
      <div className="section-head">
          <h3>Rooms</h3>
          <Link to='/' className='btn btn-primary'><i className="fa-solid fa-plus ms-2"></i> Add New</Link>
        </div>
    </div>
  )
}

export default Rooms