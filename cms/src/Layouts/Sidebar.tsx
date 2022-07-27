import React from 'react'
import { Image } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

function Sidebar() {
    return (
        <div>
            <div className="logo">
                <Link to='/'>
                    <Image src="aasda.png" />
                </Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <NavLink to='/'>Dashboard</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar