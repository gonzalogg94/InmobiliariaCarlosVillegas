import { Container, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";

const FormularioConsulta = () => {
  const sendEmail=(event)=>{
    event.preventDefault();

emailjs.sendForm('service_3xcx39y','template_4gccdsn',event.target,'fDrf7ib8tZNU5G21n')
.then(response=>console.log(response))
.catch(error=>console.log(error))
  }
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
        <Form onSubmit={sendEmail}>
          <Form.Group className="mb-3" controlId="formNombre">
            <Form.Label>Nombre completo</Form.Label>
            <Form.Control type="text" placeholder="Nombre Completo" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMail">
            <Form.Label>Ingrese un mail de contacto</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formNumero">
            <Form.Label>Ingrese un numero de contacto</Form.Label>
            <Form.Control type="number" placeholder="+543815768940" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formConsulta">
            <Form.Label>Ingrese su consulta</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Enviar Consulta
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default FormularioConsulta;
