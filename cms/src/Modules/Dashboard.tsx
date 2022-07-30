import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';

function Dashboard() {
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [])
  return (
    <div>
      <div className="section-head">
          <h3>Dashboard</h3>
      </div>
    </div>
  )
}

export default Dashboard