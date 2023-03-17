import { Col } from "react-bootstrap";

const Galeria = () => {
  return (
    <article id="galeria" className="text-center container-fluid  py-5">
      <h2 className="display-4 colorAzul text-center">Algunas de nuestras propiedades</h2>
      <hr />
      <div className="row justify-content-between">
      <Col lg={3} md={3} sm={12}>
        <img src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"className="w-75 border border-5 border border-5" alt="imagen ilustrativa" />
      </Col>
      <Col lg={3} md={3} sm={12}>
        <img src="https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"className="w-75 border border-5" alt="imagen modelo" />
      </Col>
      <Col lg={3} md={3} sm={12}>
        <img src="https://images.pexels.com/photos/205078/pexels-photo-205078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"className="w-75 border border-5" alt="imagen modelo" />
      </Col>
      <Col lg={3} md={3} sm={12}>
        <img src="https://images.pexels.com/photos/1776574/pexels-photo-1776574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"className="w-75 border border-5" alt="imagen modelo" />
      </Col>
      </div>
      <div className="row justify-content-between pt-3">
      <Col lg={3} md={3} sm={12}>
        <img src="https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"className="w-75 border border-5" alt="imagen ilustrativa" />
      </Col>
      <Col lg={3} md={3} sm={12}>
        <img src="https://images.pexels.com/photos/358636/pexels-photo-358636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"className="w-75 border border-5" alt="imagen modelo" />
      </Col>
      <Col lg={3} md={3} sm={12}>
        <img src="https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"className="w-75 border border-5" alt="imagen modelo" />
      </Col>
      <Col lg={3} md={3} sm={12}>
        <img src="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"className="w-75 border border-5" alt="imagen modelo" />
      </Col>
      </div>
    </article>
  );
};

export default Galeria;
