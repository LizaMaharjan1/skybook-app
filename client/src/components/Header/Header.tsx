import React from 'react'
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo-rounded.png'

function Header() {
  return (
    <Navbar expand="lg">
    <Container>
      <Navbar.Brand href="#">
        <Link to="/" className='logo'><Image src={Logo} className="logo img-fluid" alt='Logo' /> Skybook</Link>
      </Navbar.Brand>
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
    </Container>
  </Navbar>
  )
}

export default Header