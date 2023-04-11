import { Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import logo from "../img/logo.jpg"

const Footer = () => {
  return (
    <footer className="bg-light py-4 text-center container-fluid">
      <section className="container-fluid row">
        <article className="col-12">
          <div className="row">
            <Col lg={3} className="ps-4 py-3">
              <img src={logo} alt="Logo" className="w-25" />
            </Col>
            <Col lg={3} className="py-3">
              <ul className="lista">
                <li>
                  <Nav.Link href="#inicio">Inicio</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#servicios">Servicios</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#preguntas">FQA</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#galeria">Galeria</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#contacto">Contacto</Nav.Link>
                </li>
              </ul>
            </Col>
            <Col lg={3} className="py-3">
              <ul className="lista">
                <li>
                  <i class="bi bi-geo-alt-fill text-danger"></i>Argentina
                </li>
                <li>
                  <i class="bi bi-geo-alt-fill text-danger"></i>Brasil
                </li>
                <li>
                  <i class="bi bi-geo-alt-fill text-danger"></i>España
                </li>
              </ul>
            </Col>
            <Col lg={3} className="py-3">
              <ul className="lista">
                <li>
                  <Nav.Link href="https://www.instagram.com/">
                    <i class="bi bi-instagram text-danger"></i>Instagram
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link href="https://accounts.google.com/v3/signin/identifier?dsh=S-753980876%3A1679490706070721&hl=Es&ifkv=AWnogHe0DZc5_bnue6D4l6fN8ShvbKzhUNQbfvwmub7RwnLPgWKlRtXEksZDv2ryKGZEyEbPqVDD&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
                    <i class="bi bi-envelope-at text-danger"></i>Mail
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link href="https://web.whatsapp.com/">
                    <i class="bi bi-whatsapp text-success"></i>Whatsapp
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
