import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  return (
    <section id="inicio" className="pb-4">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 bannerPagina"
            src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 bannerPagina"
            src="https://images.pexels.com/photos/681331/pexels-photo-681331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 bannerPagina"
            src="https://images.pexels.com/photos/259950/pexels-photo-259950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Slider;
