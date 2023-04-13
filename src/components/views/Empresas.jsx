import { Container,Col } from "react-bootstrap";

const Empresas = () => {
  return (
    <section className="justify-content-center">
    <Container className="py-4 row justify-content-center" id="empresas">
<div className="text-center pb-2 container">
        <h2 className="display-4 colorAzul">Empresas Asociadas</h2>
        <hr />
      </div>
      <Col lg={6} md={6} sm={6}>
          <img
            src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-75 border border-5 border border-5"
            alt="imagen ilustrativa"
          />
        </Col>
      <Col lg={6} md={6} sm={6}>
          <img
            src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-75 border border-5 border border-5"
            alt="imagen ilustrativa"
          />
        </Col>
    </Container>
    </section>
  );
};

export default Empresas;
