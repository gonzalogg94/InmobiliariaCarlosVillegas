import { Col} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import logo from "../img/logo.jpg";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-light py-4 text-center container-fluid">
      <section className="container-fluid row">
        <article className="col-12">
          <div className="row">
            <Col lg={3} className="ps-4 py-3">
              <Navbar.Brand href="/">
                <img src={logo} alt="LogoInmobiliaria" className="w-25" />
              </Navbar.Brand>
            </Col>
            <Col lg={3} className="py-3">
              <ul className="lista">
                <li>
                  <Nav.Link href="/#inicio">Inicio</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="/#servicios">Servicios</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="/#preguntas">FQA</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="/#galeria">Galeria</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="/#empresas">Empresas</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="/#contacto">Contacto</Nav.Link>
                </li>
              </ul>
            </Col>
            <Col lg={3} className="py-3">
              <ul className="lista">
                <li>
                  <Link className="text-decoration-none text-black" to={"/argentina"}>
                    <i class="bi bi-geo-alt-fill text-danger"></i>Argentina
                  </Link>
                </li>
                <li>
                <Link className="text-decoration-none text-black" to={"/brasil"}>
                    <i class="bi bi-geo-alt-fill text-danger"></i>Brasil
                  </Link>
                </li>
                <li>
                <Link className="text-decoration-none text-black" to={"/españa"}>
                    <i class="bi bi-geo-alt-fill text-danger"></i>España
                  </Link>
                </li>
                <li>
                  <i class="bi bi-geo-alt-fill text-danger"></i>El Mundo...
                </li>
              </ul>
            </Col>
            <Col lg={3} className="py-3">
              <ul className="lista">
                <li>
                  <Nav.Link href="https://www.google.com/intl/es-419/gmail/about/">
                    <i class="bi bi-envelope">
                      carlos.f.villegas2023@gmail.com
                    </i>
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link href="https://www.instagram.com/">
                    <i class="bi bi-instagram">@InmobiliariaVillegas</i>
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link href="https://wa.me/543814581973?text=Buenos%20d%C3%ADas,%20estuve%20visitando%20su%20pagina%20web%20y%20me%20gastar%C3%ADa%20hacer%20una%20consulta.">
                    <i class="bi bi-whatsapp">+543814581973</i>
                  </Nav.Link>
                </li>
              </ul>
            </Col>
          </div>
        </article>
        <article className="col-12">
          <p>&copy; Todos los derechos reservados</p>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
