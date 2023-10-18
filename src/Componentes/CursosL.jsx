import React from "react";
import { Link } from "react-router-dom";
import idc from "../Imagenes/idc.png"

function CursosL(){
  return(
    <div className="CursosL">
      <div className="row">
      <div className="container" style = {{ backgroundColor: '#ffff'}}>
        <div className='p-3'>
          <h1 className="encabezado text fw-bold">Manda tus propias noticias</h1>
          <div className="card">
            <div className="card-header encabezado">
              <small>Help | Family </small>
            </div>
            <div className="card-body">
              <h5 className="card-title encabezado">Ver noticias</h5>
            <div className="imagen mx-auto pt-4 pb-4">
             <img src={idc}>
             </img>
            </div>
              <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: "30%"}}>
                  30%
                </div>
              </div>
              <p className="card-text pt-2">Avance general.</p>
              <hr/>
              <Link to="#" className="btn btn-primary">Continuar</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
export default CursosL;