import React from "react";
import imaso from "../Imagenes/imaso.png";
import jiji from "../Imagenes/jiji.png";
import sex from "../Imagenes/sex.png";
import idc from "../Imagenes/idc.png";

import { FaHospitalSymbol } from "react-icons/fa";

function CursosInit() {
  return (
    <div className="container">
      <h1 className="text-center mx-auto pt-5">Noticias</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img
              src={imaso}
              className="card-img-top"
              alt="Course 1"
            />
            <div className="card-body">
              <h5 className="card-title">Pildoras "magicas"</h5>
              <p className="card-text">
                Un grupo de quimicos desarrollaron unas nuevas pildoras magicas que tienen el potencial de curar el cancer, dicen "no se ilusionen mucho, todavia falta mucho, pero es un paso muy grande para curar el cancer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src={jiji}
              className="card-img-top"
              alt="Course 2"
            />
            <div className="card-body">
              <h5 className="card-title">Nuevo proyecto por el gobierno</h5>
              <p className="card-text">
El gobierno ha lanzado un ambicioso proyecto destinado a transformar la educación médica en los colegios. Este proyecto tiene como objetivo introducir una currícula más amplia y accesible en las escuelas, que incluya conceptos básicos de salud, promoción de estilos de vida saludables y nociones de primeros auxilios. Además, se espera que este programa fomente el interés por las carreras médicas desde una edad temprana, inspirando a los jóvenes a considerar opciones en el campo de la salud.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src={sex}
              className="card-img-top"
              alt="Course 3"
            />
            <div className="card-body">
              <h5 className="card-title">Se abre una nueva universidad de medicina</h5>
              <p className="card-text">
                La apertura de una nueva universidad de medicina es una noticia emocionante para la comunidad académica y la sociedad en general. Esta institución promete desempeñar un papel crucial en la formación de la próxima generación de profesionales de la salud, brindando oportunidades de aprendizaje y investigación de vanguardia en el campo de la medicina.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src={idc}
              className="card-img-top"
              alt="Course 4"
            />
            <div className="card-body">
              <h5 className="card-title">Descubrimiento importante del ADN</h5>
              <p className="card-text">
                Recientemente, los científicos han realizado un emocionante descubrimiento relacionado con el ADN. Han identificado un nuevo segmento de ADN que desempeña un papel fundamental en la regulación de la expresión génica, lo que podría tener implicaciones significativas en nuestra comprensión de enfermedades genéticas y procesos biológicos. Este hallazgo prometedor abre nuevas puertas para la investigación genética y podría llevarnos un paso más cerca de desentrañar los secretos de la herencia y la biología molecular.
              </p>
            </div>
            
          </div>
        </div>
        
      </div>
      <div className="container pt-5">
        <h3 className="text-center">No hay mas por el momento...</h3>
      </div>
     </div>
  );
}

export default CursosInit;
