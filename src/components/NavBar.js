import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#galleria">Galleria</Nav.Link>
            <Nav.Link href="#contatti">Contatti</Nav.Link>
            <NavDropdown title="Link" id="collasible-nav-dropdown">
              <NavDropdown.Item
                href="https://www.comunecampodigiove.it/it-it/"
                target="_blank"
              >
                Comune di Campo di Giove
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.parcomajella.it/"
                target="_blank"
              >
                Parco Nazionale della Majella
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
