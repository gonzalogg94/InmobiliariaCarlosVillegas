import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Menu = () => {
  return (
    <section className="container fs-6 display-5 posicion">
      <Container>
        <Navbar
          bg="white"
          expand="lg"
          className="row fs-5 justify-content-between"
        >
          <Col md={12} lg={5} className="text-center text-lg-start pb-4">
            <Navbar.Brand href="#">Logo</Navbar.Brand>
          </Col>
          <Col md={12} lg={5} className="text-center">
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0 text-dark"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link className="text-dark" href="#inicio">
                  Inicio
                </Nav.Link>
                <Nav.Link className="text-dark" href="#servicios">
                  Servicios
                </Nav.Link>
                <Nav.Link className="text-dark" href="#preguntas">
                  FAQ
                </Nav.Link>
                <Nav.Link className="text-dark" href="#galeria">
                  Galeria
                </Nav.Link>
                <Nav.Link className="text-dark" href="#contacto">
                  Contacto
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Navbar>
      </Container>
    </section>
  );
};

export default Menu;
