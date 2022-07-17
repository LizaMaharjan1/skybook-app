import React from 'react'
import { Container, Dropdown, DropdownButton, Image, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo-rounded.png'

function Header() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <Link to="/" className='logo'><Image src={Logo} className="logo img-fluid" alt='Logo' /> Skybook</Link>
        </Navbar.Brand>
        <div className="d-flex align-items-center">
          <div className='navbar-toggle'>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
            >
              <NavLink to="/" className="nav-link">Home</NavLink>
              <NavLink to="/about-us" className="nav-link">About Us</NavLink>
              <NavLink to="/contact-us" className="nav-link">Contact Us</NavLink>
            </Nav>
          </Navbar.Collapse>
          </div>
          <div className='navbar-acc'>
            <DropdownButton variant='secondary px-3 ms-5' align='end' id="dropdown-basic-button" title={<i className="fa-solid fa-circle-user"></i>}>
              <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Logout <i className="ms-3 fa-solid fa-arrow-right-from-bracket"></i></Dropdown.Item>
            </DropdownButton>
          </div>
        </div>

      </Container>
    </Navbar>
  )
}

export default Header