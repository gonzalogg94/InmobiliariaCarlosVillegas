import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
const FormularioConsulta = () => {
  return (
    <section id="contacto" className="container-fluid py-4 colorFondo">
      <div className="text-center pb-2 container">
        <h2 className="display-4 colorAzul">Consultas</h2>
        <hr />
      </div>
      <div className="text-center">
      <i class="bi bi-envelope">inmobiliariavillegas@gmail.com</i>
      </div>
      <div className="text-center">
      <i class="bi bi-instagram">InmobiliariaVillegas</i>
      </div>
      <div className="text-center">
      <i class="bi bi-whatsapp">+543816254879</i>
      </div>
      <Container className="pt-4">
        <Form >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Ingrese un mail de contacto</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Ingrese un numero de contacto</Form.Label>
            <Form.Control type="number" placeholder="+543815768940" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Ingrese su consulta</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </Container>
    </section>
  );
};

export default FormularioConsulta;
