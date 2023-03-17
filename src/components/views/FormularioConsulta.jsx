import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
const FormularioConsulta = () => {
  return (
    <section id="contacto" className="container-fluid">
      <div className="text-center">
        <h2 className="display-4 colorAzul">Contacto</h2>
      </div>
      <Container>
        <Form>
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
