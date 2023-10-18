import React from "react";
import MenuL from "../Componentes/MenuL";
import CursosInit from "../Componentes/content";
import Piedepagina from"../Componentes/piedepagina";

function Cursos(){
  return (
    <div className="Cursos">
      <MenuL/>
      <CursosInit/>
      <Piedepagina/>
    </div>
  );
}

export default Cursos;