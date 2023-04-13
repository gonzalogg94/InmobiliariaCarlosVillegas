import { Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const DepartamentosArgentina = () => {
    return (
        <section>
        <article className="container-fluid row py-5 justify-content-between colorFondo posicionFija">
            <div className="pb-5">
                <h2 className="text-primary text-center display-4">Propiedades En Argentina</h2>
            </div>
      <Col  lg={5} sm={12}>
        <h2 className="text-primary text-center display-4">Departamento 1</h2>
        <div className="pt-3">  
        <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum alias eligendi necessitatibus aut, totam ad soluta cum nemo dignissimos eius magnam autem expedita mollitia! Fuga ipsum ea tempora consectetur delectus repellat consequuntur non ut hic eligendi? Sunt hic soluta veniam atque suscipit earum ratione commodi quos. Eum, velit! Minima, laboriosam?
        </p>
        <span class="badge text-bg-success">Disponible</span>
        </div>
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
        </section>
    );
};
<h1>Esto es un titulo</h1>
export default DepartamentosArgentina;