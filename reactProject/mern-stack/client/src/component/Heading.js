import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function Heading() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">LEA's Cummunity</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                  home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/upload"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  upload
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/list"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  list
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Heading;
