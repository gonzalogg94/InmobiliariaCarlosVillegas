import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const Preguntas = () => {
  return (
    <article id="preguntas" className="py-5 colorFondo text-center">
        <h2 className="text-primary display-4 pb-3">Preguntas Frecuentes</h2>
      <Container>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>¿A que nos dedicamos?</Accordion.Header>
            <Accordion.Body className="text-start">
            Proyectos e inversiones en el mundo corrientes al comercio internacional como exportar , como importar , como conseguir mercados, etc.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>¿Como puedo contactarme?</Accordion.Header>
            <Accordion.Body className="text-start">
            Podes contactarte con nosotros a través de nuestras redes sociales o bien podes hacerlo desde nuestra pagina web en el apartado de contacto donde nos contactaremos contigo lo mas rápido posible.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </article>
  );
};

export default Preguntas;
