import React from "react"
import { Link } from "react-router-dom";
import image from "../Imagenes/image.png";
function Portada() {
  return (
    <div className="container"> 
     <div className="row">
       <img src={image} alt= "logo" className="mx-auto" style= {{maxWidth:"500px"}}/>
     </div>
      <div className="mx-auto">
        <p className="text-center"></p>
      </div>
    <Link to="/Login">
      <div className="d-grid gap-2 mx-auto pb-1">
       <button className="btn btn-primary" type="button">Iniciar Sesion</button>
    </div>
  </Link>
      
    <Link to="/Registro">
      <div className="d-grid gap-2 mx-auto pb-1">
       <button className="btn btn-primary" type="button">Registro</button>
      </div>
    </Link>
  </div>
  );
}

export default Portada;