import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import fortox from "../Imagenes/fortox.png";

function Cuk() {
  return (
    <div className="container pt-5">
      <div className="row">
         <img src={fortox} alt= "logo" className="mx-auto" style= {{maxWidth:"400px"}}/>
       </div>
      <div className="row">
        <h1 className="mx-auto text-center">Listo</h1>
        <h5 className="mx-auto text-center">Responderemos a tu duda/problema lo mas rapido posible en tu correo</h5>
      </div>
      <div className="text-center"> 
        <Link to="/HomeL" className="button text-center">
          <button className="btn btn-primary">Volver</button>
        </Link>
      </div>
      <div className="text-center pt-5 mx-auto" id="copyright">
        <hr />
        <p>
          <small>
            <AiOutlineCopyrightCircle/>Fortox Derechos reservados
          </small>
        </p>
      </div>
    </div>
  );
}

export default Cuk;