import React from "react";
import { Link } from "react-router-dom";
import "../Estilos/Estilos.css";

  
function InicioL(){
  return(
         <div className="card">
          <Link to="/Boton" className="button mx-auto pt-3"><div className="circle"></div></Link>
          <div className="card-body">
          </div>

           
             
    
     </div>
  );
}

export default InicioL;