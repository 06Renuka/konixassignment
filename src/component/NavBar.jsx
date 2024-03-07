import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
//import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary"  bg="white" ata-bs-theme="white" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Konix</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
        <Nav className="ms-auto"> {/* Align items to the right */}
            <Nav.Link href="#deets"><strong> Crypto taxes</strong></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
             <strong> Free Tool</strong>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <strong>Resources</strong>
            </Nav.Link>
          </Nav>
          <Col xs="auto">
            <Button type="submit">Get started</Button>
          </Col>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;