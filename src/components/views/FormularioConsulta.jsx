import { Container, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import Swal from "sweetalert2";

const FormularioConsulta = () => {
  const refForm = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(refForm.current);
    const serviceId = "service_3xcx39y";
    const templated = "template_4gccdsn";

    const apiKey = "fDrf7ib8tZNU5G21n";

    emailjs.sendForm(serviceId, templated, refForm.current, apiKey)
      .then((result) =>{
        if(result.status===200){
          Swal.fire({
            icon: 'success',
            title: 'OK',
            text: 'Su consulta se envio satisfactoriamente',
          })
        }else{

        }

      });
  };

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
        <Form ref={refForm} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Ingrese su nombre completo</Form.Label>
            <Form.Control
              name="formNombre"
              type="text"
              placeholder="nombre completo"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Ingrese su numero de contacto</Form.Label>
            <Form.Control
              name="formNumero"
              type="text"
              placeholder="codigo de pais seguido de su codigo de area "
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Ingrese un mail de contacto</Form.Label>
            <Form.Control
              name="formMail"
              type="email"
              placeholder="name@example.com"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Ingrese su consulta</Form.Label>
            <Form.Control name="formConsulta" as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default FormularioConsulta;
