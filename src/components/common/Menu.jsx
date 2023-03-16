import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Menu = () => {
    return (
        <section className='text-primary container'>
          <Container>
        <Navbar bg="white" variant="dark">
            <Col lg={4}>
            <Navbar.Brand className='text-start text-dark' href="#home">Navbar</Navbar.Brand>
            </Col>
            <Col lg={8} className="text-end">
            <Nav className="justify-content-start">
              <Nav.Link className='text-dark' href="#home">Inicio</Nav.Link>
              <Nav.Link className='text-dark' href="#features">Servicio</Nav.Link>
              <Nav.Link className='text-dark' href="#pricing">FAQ</Nav.Link>
              <Nav.Link className='text-dark' href="#pricing">Galeria</Nav.Link>
              <Nav.Link className='text-dark' href="#pricing">Contacto</Nav.Link>
            </Nav>
            </Col>
        </Navbar>
          </Container>
        </section>
    );
};

export default Menu;