import { Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../img/logo.jpg"

const Menu = () => {
  return (
    <section className="fs-6 display-5 posicion container-fluid">
      <Navbar
        bg="white"
        expand="lg"
        className="row fs-5 justify-content-between"
      >
        <Col md={12} lg={3} className="text-center  pb-4">
          <Navbar.Brand href="logo de la empresa">
            <img src={logo} alt="LogoInmobiliaria" className="w-25" />
          </Navbar.Brand>
        </Col>
        <Col md={12} lg={5} className="text-center">
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 text-dark"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="colorAzul" href="#inicio">
                Inicio
              </Nav.Link>
              <Nav.Link className="colorAzul" href="#servicios">
                Servicios
              </Nav.Link>
              <Nav.Link className="colorAzul" href="#preguntas">
                FAQ
              </Nav.Link>
              <Nav.Link className="colorAzul" href="#galeria">
                Galeria
              </Nav.Link>
              <Nav.Link className="colorAzul" href="#contacto">
                Contacto
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Col>
      </Navbar>
    </section>
  );
};

export default Menu;
