import React from "react";
import { Link } from "react-router-dom";
import '../Estilos/Estilos.css'
import image from "../Imagenes/image.png";

function MenuL() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/HomeL"><img src={image} alt="logo" style={{maxWidth:"100px"}}></img></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/HomeL">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Perfil">Perfil</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Cursos">Noticias</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Contactanos">Contactanos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/">Cerrar sesion</Link>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MenuL;