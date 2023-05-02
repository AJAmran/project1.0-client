import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link, Navigate } from "react-router-dom";
const Header = () => {
  const user = ''
  return (
    <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
    <Container>
      <Navbar.Brand href="#home"><img src={logo} style={{height:'40px'}} alt="" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#blog">
            Blog
          </Nav.Link>
          <Nav>
           { user ? <>user ace</>
           :
           <Link to='/login'>
           <Button variant="outline-light">Login</Button></Link>
           }
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Header;
