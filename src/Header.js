import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, NavDropdown, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            {/* <Navbar.Brand>HOMEO MEDICARE</Navbar.Brand> */}
            <Nav className="me-auto">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Nav.Link active>
                <Link style={{ color: "white" }} to="/">
                  ADD PATIENT
                </Link>
              </Nav.Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Nav.Link>
                <Link style={{ color: "white" }} to="/today">
                  TODAY'S SCHEDULE
                </Link>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}
export default Header;
