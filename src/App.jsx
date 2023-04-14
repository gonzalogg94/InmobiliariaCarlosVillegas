import "bootstrap/dist/css/bootstrap.min.css";
import "./components/style.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Inicio from "./components/views/Inicio";
import DepartamentosArgentina from "./components/views/DepartamentosArgentina";
import DepartamentosBrasil from "./components/views/DepartamentosBrasil";
import DepartamentosEspania from "./components/views/DepartamentosEspania";


function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route path='/' element={<Inicio></Inicio>}></Route>
        <Route path='/argentina' element={<DepartamentosArgentina></DepartamentosArgentina>}></Route>
        <Route path='/brasil' element={<DepartamentosBrasil></DepartamentosBrasil>}></Route>
        <Route path='/españa' element={<DepartamentosEspania></DepartamentosEspania>}></Route>
        <Route path='/elmundo' element={<Inicio></Inicio>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
  );
}

export default App;
