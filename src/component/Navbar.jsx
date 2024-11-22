import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Badge } from "react-bootstrap";
import  "./navbar.css";
import { Link } from "react-router-dom";
function NavigationBar() {
  return (
  
    <Navbar bg="primary" expand="lg">
      <Container>
      <Navbar.Brand as={Link} to="/">
        <Badge bg="dark" style={{ fontSize: "1.2rem" }}>My Personal React Website</Badge>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link className="text-light px-3 py-2 rounded hover-effect">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className="text-light px-3 py-2 rounded hover-effect">About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Hobbies">
              <Nav.Link className="text-light px-3 py-2 rounded hover-effect">Hobbies</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Education">
              <Nav.Link className="text-light px-3 py-2 rounded hover-effect">Education </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link className="text-light px-3 py-2 rounded hover-effect">Contact</Nav.Link>
            </LinkContainer>  

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
