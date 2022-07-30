import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'

function Sidebar() {
    const [isAdmin, setIsAdmin] = useState(false)
    const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
        setIsAdmin(true)
    }
  }, [])
    return (
        <div className={`${isAdmin ? 'sidebar py-5' : 'd-none'}`}>
            <div className="nav-items">
                <ul className='sidebar__items'>
                    <li>
                        <NavLink to='/'><i className="fa-solid fa-house"></i>Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to='/hotels'><i className="fa-solid fa-hotel"></i>Hotels</NavLink>
                    </li>
                    <li>
                        <NavLink to='/rooms'><i className="fa-solid fa-person-shelter"></i>Rooms</NavLink>
                    </li>
                    <li>
                        <NavLink to='/users'><i className="fa-solid fa-user-gear"></i>User</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar