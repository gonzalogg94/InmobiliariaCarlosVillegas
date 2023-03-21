import { Container, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const FormularioConsulta = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      formNombre: "",
      formNumero: "",
      formMail: "",
      formConsulta: "",
    },
  });
  const refForm = useRef();
  const enviarFormulario = () => {
    const serviceId = "service_3xcx39y";
    const templated = "template_4gccdsn";
    const apiKey = "fDrf7ib8tZNU5G21n";

    emailjs
      .sendForm(serviceId, templated, refForm.current, apiKey)
      .then((result) => {
        if (result.status === 200) {
          Swal.fire({
            icon: "success",
            title: "OK",
            text: "Su consulta se envio satisfactoriamente",
          });
          reset();
          
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="">Why do I have this issue?</a>',
          });
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
        <Form ref={refForm} onSubmit={handleSubmit(enviarFormulario)}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Ingrese su nombre completo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre completo"
              {...register("formNombre", {
                required: "Este dato es obligatorio",
                minLength: {
                  value: 2,
                  message: "Debe ingresar como minimo 2 caracteres",
                },
                maxLength: {
                  value: 50,
                  message: "Debe ingresar como maximo 50 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.formNombre?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Ingrese su numero de contacto</Form.Label>
            <Form.Control
              type="text"
              placeholder="codigo de pais seguido de su codigo de area "
              {...register("formNumero", {
                required: "Este dato es obligatorio",
                minLength: {
                  value: 10,
                  message: "Debe ingresar como minimo 10 caracteres",
                },
                maxLength: {
                  value: 15,
                  message: "Debe ingresar como maximo 15 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.formNumero?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Ingrese un mail de contacto</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              {...register("formMail", {
                required: "El mail de contacto es obligatorio",
                pattern: {
                  value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
                  message: "Debe ingresar un mail valido",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.formMail?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Ingrese su consulta</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              {...register("formConsulta", {
                required: "Este dato es obligatorio",
                minLength: {
                  value: 2,
                  message: "Debe ingresar como minimo 2 caracteres",
                },
                maxLength: {
                  value: 500,
                  message: "Debe ingresar como maximo 500 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.formConsulta?.message}
            </Form.Text>
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
