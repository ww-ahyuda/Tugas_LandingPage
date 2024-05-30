import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../logo.png";


function Header() {
  return (
    <section id="beranda">
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#beranda">
            <img
              src={logo}
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto header d-flex justify-content-between">
              <Nav.Link className="ms-4" href="#beranda">
                Beranda
              </Nav.Link>
              <Nav.Link className="ms-4" href="#profile">
                Profile
              </Nav.Link>
              <Nav.Link className="ms-4" href="#features">
                Fasilitas
              </Nav.Link>
              <Nav.Link className="ms-4" href="#FAQ">
                FAQ
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}

export default Header;