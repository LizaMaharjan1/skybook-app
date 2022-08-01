import React, { useState } from 'react'
import { Container, Dropdown, DropdownButton, Image, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Logo from '../../assets/images/logo-rounded.png'

function Header() {

  const navigate = useNavigate()

  const logOut = () => {
    localStorage.removeItem("token")
    navigate('/login')
  }
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <Link to="/" className='logo'><Image src={Logo} className="logo img-fluid" alt='Logo' /> Skybook</Link>
        </Navbar.Brand>
        <div className="d-flex align-items-center">
          <div className='navbar-toggle'>
          <Navbar.Toggle aria-controls="navbarScroll" />
          {/* <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
            >
              <NavLink to="/" className="nav-link">Home</NavLink>
              <NavLink to="/contact-us" className="nav-link">Contact Us</NavLink>
            </Nav>
          </Navbar.Collapse> */}
          </div>
          <div className='navbar-acc'>
            <DropdownButton variant='secondary px-2 ms-5' align='end' id="dropdown-basic-button" title={<i className="fa-solid fa-circle-user me-2"></i>}>
              <Dropdown.Item href="#">Profile</Dropdown.Item>
              <Dropdown.Item onClick={logOut}>Logout <i className="ms-3 fa-solid fa-arrow-right-from-bracket"></i></Dropdown.Item>
            </DropdownButton>
          </div>
        </div>

      </Container>
    </Navbar>
  )
}

export default Header