import React from "react";
import { Link } from "react-router-dom";

function Singin () {
  return(
    <div className="container">
     
      <div className="row">
      <div className="text-center mx-auto pt-4">
        <h1>REGISTRATE</h1>
        <p>Registrate para ayudarnos a crecer y ayudar a más personas</p>
      </div>
      <div className="container pb-3">
        <form class="row g-3"  action="/HomeL" method="get">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Correo</label>
            <input type="email" class="form-control" id="inputEmail4"/>
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="inputPassword4"/>
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">Dirección</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">Complemento</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">Ciudad</label>
            <input type="text" class="form-control" id="inputCity"/>
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">Departamento</label>

            
            <select id="inputState" className="form-select" defaultValue="Antioquia">
                  <option value="Antioquia">Antioquia</option>
                  <option value="Antioquia">Caldas</option>
                  <option value="Antioquia">Atlantico</option>
                  <option value="Antioquia">Magdalena</option>
                  <option value="Antioquia">Santander</option>
            </select>
          </div>
          <div className="col-12">
                <label htmlFor="fechaNacimiento" className="form-label">Fecha de Nacimiento</label>
                <input 
                  type="date" 
                  className="form-control" 
                  id="fechaNacimiento" 
                  name="fechaNacimiento"/>
              </div>
          
           <div class="col-md-2">
            <label for="inputZip" class="form-label">Ocupación</label>
            <input type="text" class="form-control" id="inputZip"/>
          </div>
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck"/>
              <label class="form-check-label" for="gridCheck">
                Aceptar terminos y condiciones 
              </label>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  
  );
}

export default Singin;