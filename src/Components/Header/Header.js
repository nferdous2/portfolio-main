import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Header.css'
const Header = () => {
    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" className="header-container">
                <Container  >
                    <Navbar.Brand href="#home" className="justify-content-start">
                        <p className="nav-style">NF</p>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className=" justify-content-end">
                        <Nav.Link as={HashLink} to="/" ><p className="nav-style ">Home</p></Nav.Link>
                        <Nav.Link ><p className="nav-style ">About Me</p></Nav.Link>
                        <Nav.Link as={HashLink} to="/projects#projects"><p className="nav-style ">Projects</p></Nav.Link>
                        <Nav.Link as={HashLink} to="/contact#contact"><p className="nav-style ">Contact Me</p></Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;