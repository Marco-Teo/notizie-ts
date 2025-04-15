import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="d-flex justify-content-between">
        <div className="d-flex justify-content-center align-items-center">
          <Link to="/" className="text-decoration-none text-reset">
            <h4>HOME</h4>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">News</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
        <div id="log-in">
          {/* non ci metto il link giusto visto che è solo per fare scena altrimenti dovrei creare una pagina per il log in */}
          <Link to="/" className="text-decoration-none text-reset">
            <h4>Log In</h4>
          </Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
