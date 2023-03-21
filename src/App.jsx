import "bootstrap/dist/css/bootstrap.min.css";
import "./components/style.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Menu from "./components/common/Menu";
import Slider from "./components/views/Slider";
import Servicios from "./components/views/Servicios";
import Preguntas from "./components/views/Preguntas";
import Galeria from "./components/views/Galeria";
import FormularioConsulta from "./components/views/FormularioConsulta";
import Footer from "./components/common/Footer";


function App() {
  return (
    <>
      <Menu></Menu>
      <Slider></Slider>
      <Servicios></Servicios>
      <Preguntas></Preguntas>
      <Galeria></Galeria>
      <FormularioConsulta></FormularioConsulta>
      <Footer></Footer>
    </>
  );
}

export default App;
