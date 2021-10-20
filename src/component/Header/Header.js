import Button from "@restart/ui/esm/Button";
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <div>
        <Navbar bg="light" expand='lg' variant="light">
          <Container>
            <Navbar.Brand href="/">
              <img
                src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/23/2018/09/Logo-1-copy-9.png"
                alt=""
              />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>

              {user?.email ? (
                <Button className="btn" onClick={logOut} variant="light">
                  Logout
                </Button>
              ) : (
                <Nav.Link as={Link} to="/registration">
                  Login/Register
                </Nav.Link>
              )}
              <Navbar.Text>
                Signed in as: <span>{user?.displayName}</span>
              </Navbar.Text>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      
    </div>
  );
};

export default Header;
