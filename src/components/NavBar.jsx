import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/logo.svg";

export default function NavBar() {
  return (
    <Navbar expand="md">
      <Container>
        <Link to="/" className="logo-container">
          <img src={logo} alt="" className="logo-image" />
          <span className="logo-text">Bartender Brain</span>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4">
            <Link to="/workshop">Workshop</Link>
            <Link to="/events">Private Events</Link>
            <Link to="/contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
