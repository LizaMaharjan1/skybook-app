import React from 'react'
import { Image } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="logo">
                <Link to='/'>
                    <Image src="aasda.png" />
                </Link>
            </div>
            <div className="nav-items">
                <ul className='sidebar__items'>
                    <li>
                        <NavLink to='/'><i className="fa-solid fa-house"></i>Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to='/hotel'><i className="fa-solid fa-hotel"></i>Hotels</NavLink>
                    </li>
                    <li>
                        <NavLink to='/room'><i className="fa-solid fa-booth-curtain"></i>Rooms</NavLink>
                    </li>
                    <li>
                        <NavLink to='/user'><i className="fa-solid fa-user-gear"></i>User</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar