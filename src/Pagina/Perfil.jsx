import React from "react";
import MenuL from "../Componentes/MenuL";
import Profile from "../Componentes/profile";
import Piedepagina from '../Componentes/piedepagina';

function Perfil () {
  return(
    <div className="perfil">
      <MenuL/>
      <Profile/>
      <Piedepagina/>
    </div>
  );
} 
export default Perfil;
