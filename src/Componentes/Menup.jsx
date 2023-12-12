import React from "react";
import { Link } from "react-router-dom";
import '../Estilos/Estilos.css'
import fortox from "../Imagenes/fortox.png";

function Menup() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img src={fortox} alt="logo" style={{maxWidth:"100px"}}></img></Link>
          
        </div>
      </nav>
    </div>
  );
}

export default Menup;