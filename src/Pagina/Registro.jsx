import React from "react";
import Menu from "../Componentes/Menu";
import FormularioRegistro from "../Componentes/FormularioRegistro";
import { AiOutlineCopyrightCircle } from "react-icons/ai"

function Registro(){
  return(
   <div className="Registro">
    <Menu/>
    <FormularioRegistro/>
    <div className="text-center pt-5 mx-auto" id="copyright">
      <AiOutlineCopyrightCircle className="text-center pt-5 mx-auto" id="copyright"/><hr/>
        <p><small><AiOutlineCopyrightCircle/>Fortox Derechos reservados</small></p>
      </div>
    </div>
   );
}

export default Registro;