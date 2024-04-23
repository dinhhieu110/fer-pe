import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <Navbar
        className="fixed-top"
        bg="dark"
        data-bs-theme="dark"
        style={{ width: '100%' }}
      >
        <Container fluid>
          <Navbar.Brand href="home">Logo</Navbar.Brand>
          {/* <Nav className="me-auto"> */}
          <Nav className="menuList">
            <Nav.Link as={Link} to="/" className="links" href="home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/videos" className="links" href="videos">
              Videos
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/comments"
              className="links"
              href="comments"
            >
              Comment
            </Nav.Link>
            <Nav.Link as={Link} to="/form" className="links" href="form">
              Form
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
