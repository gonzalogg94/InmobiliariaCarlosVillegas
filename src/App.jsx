import "bootstrap/dist/css/bootstrap.min.css";
import "./components/style.css";
import Menu from "./components/common/Menu";
import Slider from "./components/views/Slider";
import Servicios from "./components/views/Servicios";

function App() {
  return (
    <>
      <Menu></Menu>
      <Slider></Slider>
      <Servicios></Servicios>
    </>
  );
}

export default App;
