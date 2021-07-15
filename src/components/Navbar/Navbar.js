import React from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";


export const NavbarComp = () => {
  return (
    <Navbar bg='dark' variant='dark' expand="lg">
      <Container>
        <Navbar.Brand>GitHub Search</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
            <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
