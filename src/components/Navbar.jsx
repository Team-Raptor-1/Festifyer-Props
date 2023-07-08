
import React from 'react';
import "../styles/Navbar.css";
import Tool from "./components";
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src="https://www.festifyer.com/storage/system/6fYpjT6r6ugsHt5aYXOm59JeRHk7OslnDU3yktbl.png" alt="alternative" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/"className = "nav-link ms-auto">
              <Tool blogs="Blogs" />
            </Nav.Link>
            <Nav.Link href="/" className = "nav-link ms-auto">
              <Tool contacts="Contact" />
            </Nav.Link>
          </Nav>
          <Nav>
            <Button variant="primary" className = "ms-auto transparent-button">
              <Tool login="Abdullah" />

            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
