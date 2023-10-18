import React from "react";
import Menu from "../Componentes/Menu";
import Portada from "../Componentes/portada";
import { AiOutlineCopyrightCircle } from "react-icons/ai"



function Inicio(){
  return(
   <div className="Inicio">
      <Menu/>
      <Portada/>
      <div className="text-center pt-5 mx-auto" id="copyright">
      <hr/>
        <p><small><AiOutlineCopyrightCircle/>Help Family Derechos reservados</small></p>
      </div>
    </div>
   );
}

export default Inicio;