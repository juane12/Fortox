import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from "./Pagina/Inicio";
import Cursos from "./Pagina/Cursos";
import Login from "./Pagina/Login";
import Registro from "./Pagina/Registro";
import HomeL from "./Pagina/homeL";
import Contactanos from "./Pagina/Contactanos";
import Boton from "./Pagina/boton";
import Perfil from "./Pagina/Perfil";
import Miscursos from "./Pagina/Miscursos";


function App() {
  return (
    <Router>
      <Routes>
        
        <Route exact path='/' element={<Inicio/>}/>
        <Route exact path="/Cursos" element={<Cursos/>}/>
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/Registro" element={<Registro/>}/>
        <Route exact path="/HomeL" element={<HomeL/>}/>
        <Route exact path="/Contactanos" element={<Contactanos/>}/>
        <Route exact path="/Boton" element={<Boton/>}/>
        <Route exact path="/Perfil" element={<Perfil/>}/>
        <Route exact path="/Miscursos" element={<Miscursos/>}/>
        
      </Routes>
    </Router> 
  )
}

export default App
