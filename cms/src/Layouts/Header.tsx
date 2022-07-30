import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router';

function Header() {
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
        <Navbar bg="light" expand="lg" className={`${isAdmin ? '' : 'd-none'}`}>
            <Container fluid>
                <Navbar.Brand href="#home">SkyBook - CMS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {/* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link> */}
                        <NavDropdown align={'start'} title={<i className="fa-solid fa-circle-user me-2"></i>} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Logout <i className="ms-3 fa-solid fa-arrow-right-from-bracket"></i></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header