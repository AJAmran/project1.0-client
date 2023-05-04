import React, { useContext } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { AutContext } from "../../../provider/AuthProvider";


const Header = () => {
  const { user, logOut } = useContext(AutContext);
  const handleLogout = () => {
    logOut();
  };

  return (
    <Navbar bg="danger" expand="lg" variant="dark">
      <Container>
        <img src={logo} alt="" className="" height={"50px"} />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={NavLink} exact to="/" activeClassName="active">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/blog" activeClassName="active">
              Blog
            </Nav.Link>
            {user ? (
              <img
                src={user?.photoURL}
                alt=""
                style={{ height: "40px", width: "40px" }}
                className="rounded-circle"
                title={user?.displayName}
              />
            ) : (
              <Link to="/login">
                <Button variant="outline-light">Login</Button>
              </Link>
            )}
            {user ? (
              <Button
                variant="outline-light"
                className="ms-1"
                style={{ width: "100px" }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : (
              ""
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
