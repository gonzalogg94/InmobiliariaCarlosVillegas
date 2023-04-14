import { Col } from "react-bootstrap";

const Empresas = () => {
  return (
    <article id="empresas" className="text-center container-fluid  py-5">
      <div className="container">
        <h2 className="display-4 colorAzul text-center">Empresas asociadas</h2>
        <hr />
        <div className="row justify-content-center">
          <Col lg={5} md={5} sm={5}>
            <img
              src="https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="w-75 border border-5 border border-5"
              alt="imagen ilustrativa"
            />
          </Col>
          <Col lg={5} md={5} sm={5}>
            <img
              src="https://images.pexels.com/photos/936713/pexels-photo-936713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="w-75 border border-5"
              alt="imagen modelo"
            />
          </Col>
        </div>
      </div>
    </article>
  );
};

export default Empresas;
