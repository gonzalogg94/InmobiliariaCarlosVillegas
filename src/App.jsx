import "bootstrap/dist/css/bootstrap.min.css";
import "./components/style.css";
import Menu from "./components/common/Menu";
import Slider from "./components/views/Slider";
import Servicios from "./components/views/Servicios";
import Preguntas from "./components/views/Preguntas";

function App() {
  return (
    <>
      <Menu></Menu>
      <Slider></Slider>
      <Servicios></Servicios>
      <Preguntas></Preguntas>
    </>
  );
}

export default App;
