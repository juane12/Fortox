import React from "react"
import { Link } from "react-router-dom";
import fortoxx from "../Imagenes/fortoxx.png";


function Init() {
  return (
    <div className="container"> 
      
     <div className="row">
       
       <img src={fortoxx} alt= "logo" className="mx-auto" style= {{maxWidth:"500px"}}/>
       <div className="container">
         <div className="mx-auto">
         <div class="card">

  <div class="card-body">
    <form action="/HomeL" method="get">
                  <div class="mb-3">
                    <label for="exampleInputcellphone" class="form-label">Teléfono</label>
                    <input type="cellphone" class="form-control" id="exampleInputcellphone" aria-describedby="cellphoneHelp"/>
                    <div id="emailHelp" class="form-text">No lo compartiremos con nadie mas.</div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                  </div>
                  <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Recuerdame en este dispositivo</label>
                  </div>
                  <button type="submit" class="btn btn-primary">Enviar</button>
                </form>
   </div>
</div>
         </div>
           
       </div>
     </div>
    </div>

  
      );
}      

export default Init;