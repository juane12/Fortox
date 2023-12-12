import React from "react";
import Menup from "../Componentes/Menup";
import Portada from "../Componentes/portada";
import { AiOutlineCopyrightCircle } from "react-icons/ai"



function Inicio(){
  return(
   <div className="Inicio">
      <Menup/>
      <Portada/>
      <div className="text-center pt-5 mx-auto" id="copyright">
      <hr/>
        <p><small><AiOutlineCopyrightCircle/>Fortox Derechos reservados</small></p>
      </div>
    </div>
   );
}

export default Inicio;