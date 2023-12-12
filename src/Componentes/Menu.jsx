import React from "react";
import { Link } from "react-router-dom";
import '../Estilos/Estilos.css'
import fortox from "../Imagenes/fortox.png";

function Menu() {
  return (
    <div className="header">
      {/* Navbar component */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"> <Link className="navbar-brand" to="/"><img src={fortox} alt="logo" style={{maxWidth:"100px"}}></img></Link></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/Login">Iniciar sesión</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Registro">Registro</Link>
              </li>
              
            </ul>
           
          </div>
        </div>
      </nav>
      
      </div>
  );
}

export default Menu;