import { Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const Servicios = () => {
  return (
    <article id="servicios" className="container-fluid row py-5 justify-content-between bg-light posicionFija">
      <Col className="text-center" lg={5} sm={12}>
        <h2 className="text-primary text-center display-4">Servicios</h2>
        <p className="text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          facere magni minima, quam nisi alias, possimus earum veniam
          reprehenderit non nostrum dolore quibusdam aliquid tempora amet illo
          quas vitae eius? Delectus, alias accusantium earum vel laudantium
          eius. Officiis reprehenderit voluptatibus odit maxime velit,
          excepturi, consequatur nobis praesentium expedita assumenda amet.
        </p>
      </Col>
      <Col lg={5} sm={12} className="text-center">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/3689186/pexels-photo-3689186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/955389/pexels-photo-955389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Col>
    </article>
  );
};

export default Servicios;
