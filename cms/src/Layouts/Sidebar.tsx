import React from 'react'
import { Image } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

function Sidebar() {
    return (
        <div className='sidebar py-5'>
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