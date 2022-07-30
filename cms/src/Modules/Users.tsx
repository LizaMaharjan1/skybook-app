import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom'

function Users() {
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [])
  return (
    <div>
      <div className="section-head">
          <h3>Users</h3>
          <Link to='/' className='btn btn-primary'><i className="fa-solid fa-plus ms-2"></i> Add New</Link>
        </div>
    </div>
  )
}

export default Users