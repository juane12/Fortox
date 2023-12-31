import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import fortoxx from "../Imagenes/fortoxx.png";

function Boton() {
  return (
    <div className="container pt-5">
      <div className="row">
         <img src={fortoxx} alt= "logo" className="mx-auto" style= {{maxWidth:"400px"}}/>
       </div>
      <h1 className="mx-auto text-center">ALERTA</h1>
      <h5 className="mx-auto text-center">Se ha alertado a la empresa.</h5>
      <div className="text-center"> 
        <Link to="/HomeL" className="button text-center">
          <button className="btn btn-primary">Cancelar</button>
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

export default Boton;
