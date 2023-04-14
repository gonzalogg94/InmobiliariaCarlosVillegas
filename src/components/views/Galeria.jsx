import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Galeria = () => {
  return (
    <article id="galeria" className="text-center container-fluid  py-5">
      <h2 className="display-4 colorAzul text-center">
        Algunas de nuestras propiedades
      </h2>
      <hr />
      <div className="container">
        <Link className="text-decoration-none" to={"/españa"}>
          <h3 className="display-5">España</h3>
        </Link>
        <hr />
      </div>
      <div className="row justify-content-between">
        <Col lg={4} md={4} sm={12}>
          <img
            src="https://images.pexels.com/photos/2111768/pexels-photo-2111768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-75 border border-5 border border-5"
            alt="imagen ilustrativa"
          />
        </Col>
        <Col lg={4} md={4} sm={12}>
          <img
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-75 border border-5"
            alt="imagen modelo"
          />
        </Col>
        <Col lg={4} md={4} sm={12}>
          <img
            src="https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-75 border border-5"
            alt="imagen modelo"
          />
        </Col>
      </div>
      <div className="container">
        <Link className="text-decoration-none" to={"/brasil"}>
          <h3 className="display-5">Brasil</h3>
        </Link>
        <hr />
      </div>
      <div className="row justify-content-between">
        <Col lg={4} md={4} sm={12}>
          <img
            src="https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-75 border border-5 border border-5"
            alt="imagen ilustrativa"
          />
        </Col>
        <Col lg={4} md={4} sm={12}>
          <img
            src="https://images.pexels.com/photos/565324/pexels-photo-565324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-75 border border-5"
            alt="imagen modelo"
          />
        </Col>
        <Col lg={4} md={4} sm={12}>
          <img
            src="https://images.pexels.com/photos/323772/pexels-photo-323772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-75 border border-5"
            alt="imagen modelo"
          />
        </Col>
      </div>
      <div className="container">
        <Link className="text-decoration-none" to={"/argentina"}>
          <h3 className="display-5">Argentina</h3>
        </Link>
        <hr />
      </div>
      <div className="row justify-content-between">
        <Col lg={4} md={4} sm={12}>
          <img
            src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-75 border border-5 border border-5"
            alt="imagen ilustrativa"
          />
        </Col>
        <Col lg={4} md={4} sm={12}>
          <img
            src="https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-75 border border-5"
            alt="imagen modelo"
          />
        </Col>
        <Col lg={4} md={4} sm={12}>
          <img
            src="https://images.pexels.com/photos/205078/pexels-photo-205078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-75 border border-5"
            alt="imagen modelo"
          />
        </Col>
      </div>
      <div className="container pt-5">
        <h3 className="display-5 colorAzul">El mundo...</h3>
      </div>
    </article>
  );
};

export default Galeria;
