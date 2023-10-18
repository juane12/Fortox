import React from "react";
import MenuL from "../Componentes/MenuL";
import InicioL from "../Componentes/InicioL";
import Piedepagina from"../Componentes/piedepagina";

function HomeL() {
 return(
   <div className="homeL">
    <MenuL/>
    <InicioL/>
    <Piedepagina/>
   </div>
 );
  
}
export default HomeL;