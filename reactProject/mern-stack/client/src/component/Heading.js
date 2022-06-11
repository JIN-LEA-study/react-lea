import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import firebase from "../component/firebase";

function Heading() {
  const navigate = useNavigate();

  // user 정보를 받아옴
  const user = useSelector((state) => state.user);

  //logout
  const LogoutHandler = () => {
    navigate("/");
    firebase.auth().signOut();
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">LEA's Cummunity</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link
                to="/"
                style={{
                  color: "black",
                  textDecoration: "none",
                  marginRight: "10px",
                }}
              >
                home
              </Link>
              <Link
                to="/upload"
                style={{
                  color: "black",
                  textDecoration: "none",
                  marginRight: "10px",
                }}
              >
                upload
              </Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            {user.accessToken ? (
              <Navbar.Text
                style={{ cursor: "pointer" }}
                onClick={() => LogoutHandler()}
              >
                Logout
              </Navbar.Text>
            ) : (
              <Link
                to="/login"
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
              >
                login
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Heading;
