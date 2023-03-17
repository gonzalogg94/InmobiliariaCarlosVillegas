
import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Menu = () => {
    return (
        <section className='container fs-6'>
      <Container>
          <Navbar bg="white" expand="lg"  className="row fs-5 justify-content-between">
        <Col md={12} lg={5} className="text-center text-lg-start pb-4">
        <Navbar.Brand href="#">Icono</Navbar.Brand>
        </Col>
        <Col md={12} lg={5} className="text-center">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Inicio</Nav.Link>
            <Nav.Link href="#action2">Servicios</Nav.Link>
            <Nav.Link href="#action2">FAQ</Nav.Link>
            <Nav.Link href="#action2">Galeria</Nav.Link>
            <Nav.Link href="#action2">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Col>
    </Navbar>
      </Container>
        </section>
    );
};

export default Menu;