import Slider from "./Slider";
import Servicios from "./Servicios";
import Preguntas from "./Preguntas";
import Galeria from "./Galeria";
import FormularioConsultas from "./FormularioConsulta";
import Empresas from "./Empresas";

const Inicio = () => {
  return (
    <section>
      <Slider></Slider>
      <Servicios></Servicios>
      <Preguntas></Preguntas>
      <Galeria></Galeria>
      <Empresas></Empresas>
      <FormularioConsultas></FormularioConsultas>
    </section>
  );
};

export default Inicio;
