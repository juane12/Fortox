import React from "react";
import { Link } from "react-router-dom";
import "../Estilos/Estilos.css";
import idc from "../Imagenes/idc.png";
import sex from "../Imagenes/sex.png";
import imaso from "../Imagenes/imaso.png";
import { BiTime } from 'react-icons/bi';
import redbutton from "../Imagenes/redbutton.png";


function InicioL(){
  return(
         <div className="card">
            <div className="card-header text-center">
              <small >Bachiller | Media tecnica TIC</small>
            </div>
          <Link to="/Boton" className="button mx-auto pt-3"><div className="circle"></div></Link>

           
             
    <div className="row pt-3">
     <div className="container" style={{ backgroundColor: "#EEF7F7"}}>
       <div className="p-3">
        <h1 className="encabezado text fw-bold">Continuar con mis noticias</h1>
      </div>
     </div>
    </div>
     <div className="container mx-auto text-center">
       <h2 className="pt-3">Noticias destacadas</h2>
     </div>
     <div className="container px-5">
       <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="card">
                <img src={imaso} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 className="card-title">Pildoras "magicas"</h5>
              <p className="card-text">
                Un grupo de quimicos desarrollaron unas nuevas pildoras magicas que tienen el potencial de curar el cancer...
              </p>
                  <Link to="/Cursos" class="btn btn-primary">Leer mas</Link>
                </div>
              </div>
            </div>
           <div class="carousel-item">
               <div class="card">
                <img src={sex} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 className="card-title">Nuevo proyecto por el gobierno</h5>
              <p className="card-text">
El gobierno ha lanzado un ambicioso proyecto destinado a transformar la educación médica en los colegios...</p>
                  <Link to="/Cursos" class="btn btn-primary">Leer mas</Link>
                </div>
              </div>
            </div>
           <div class="carousel-item">
              <div class="card">
                <img src={idc} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 className="card-title">Descubrimiento importante del ADN</h5>
              <p className="card-text">
                Recientemente, los científicos han realizado un emocionante descubrimiento relacionado con el ADN...</p>
                  <Link to="/Cursos" class="btn btn-primary">Leer mas</Link>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
     </div>
      
  </div>
  );
}

export default InicioL;