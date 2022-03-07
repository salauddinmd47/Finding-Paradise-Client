import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo2.png";
import useAuth from "../../hooks/useAuth";


const Header = () => {
  const {user, logOut} = useAuth()
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
        <Container>
          <Navbar.Brand className="brand-logo text-warning" href="/">
            <img className="nav-logo  me-2" src={logo} alt="" />
            Finding Paradise
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <NavLink className="nav-link text-dark" to="/home">
                Home
              </NavLink>
             
              <NavLink className="nav-link text-dark" to='/manageOrders'>Manage Orders</NavLink>
              <NavLink className="nav-link text-dark" to='/addPackage'>Add Package</NavLink>
              {
                user.displayName && <NavLink className="nav-link text-dark" to='/myorders'>
                  My Orders
                </NavLink>
              }
              {user.displayName && <NavLink className="nav-link" to="/#">{user.displayName}</NavLink>}
              {
                !user.displayName?<NavLink className="nav-link text-dark bg-warning " to="/login">
                Login
              </NavLink>:<button className="border-0 bg-danger" onClick={logOut}>logout</button> 
              
              } 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
