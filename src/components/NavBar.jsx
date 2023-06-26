import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar expand="md">
      <Container>
        <Link to="/">Bartender Brain</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-3">
            <Link to="/about">About</Link>
            <Link to="/workshop">Workshop</Link>
            <Link to="/bartending">Bartend</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
