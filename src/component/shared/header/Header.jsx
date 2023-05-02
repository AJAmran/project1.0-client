import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo.png'
const Header = () => {
  const user = null;
  return (
      <Navbar bg="danger" expand="lg" variant="dark">
        <Container>
        <img src={logo} alt="" className="" height={"50px"}/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={NavLink} exact to="/" activeClassName="active">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/blog" activeClassName="active">
              Blog
            </Nav.Link>
            { user ? <>userPoto</>
              :
              <Link to="/login"><Button variant="outline-light">Login</Button></Link>
            }
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default Header;
