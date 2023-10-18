import React from "react";
import descarga from "../Imagenes/descarga.png";
import { Link } from "react-router-dom";
import { AiOutlineCopyrightCircle } from "react-icons/ai"

function Piedepagina () {
  return (
    <div className="container-fluid">
      <div className="row mx-auto">
        <div className="text-center pt-5 mx-auto">
          <h2 className="encabeza">Contactanos</h2>
          <img src={descarga} alt="pdp" width="100"/>
          <h5 className="encabezado px-5">¿Tienes algun problema? Contactanos al número xxxxxxxxx</h5>
          <p className="px-3"><small>Si tiene alguna pregunta o necesita asistencia médica, no dude en ponerse en contacto con nosotros. Nuestro equipo de profesionales de la salud está aquí para ayudarlo en todo momento. Puede comunicarse con nosotros a través del formulario de contacto a continuación o utilizando la información de contacto proporcionada. Su bienestar es nuestra principal preocupación, y estamos comprometidos en brindarle la atención médica que merece.. </small></p>
          <section>
           <Link to="/Contactanos" className="button"><button className="btn btn-primary">Conocer más</button></Link>
          </section>
          <div id="copyright">
            <hr/>
            <p><small><AiOutlineCopyrightCircle/> Help Family Derechos reservados</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Piedepagina;