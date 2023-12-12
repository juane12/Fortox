import React from "react";
import Menu from "../Componentes/Menu";
import Init from "../Componentes/init"
import { AiOutlineCopyrightCircle } from "react-icons/ai"

function Login(){
  return(
   <div className="Login">
      <Menu/>
      <Init/>
     <div className="text-center pt-5 mx-auto" id="copyright">
      <hr/>
        <p><small><AiOutlineCopyrightCircle/>Fortox Derechos reservados</small></p>
      </div>
    </div>          

    
   );
}

export default Login;