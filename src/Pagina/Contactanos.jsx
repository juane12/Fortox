import React from "react";
import MenuL from "../Componentes/MenuL";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

function Contactanos() {
  return (
    <div className="container">
      <MenuL/>

      <div className="mb-3 pt-5">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Correo electronico
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Cual es el problema
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        />
      </div>

      <div>
        <label htmlFor="formFileLg" className="form-label">
          Añade un archivo (en caso de ser necesario)
        </label>
        <input
          className="form-control form-control-lg"
          id="formFileLg"
          type="file"
        />
      </div>

      <div className="text-center pt-5 mx-auto" id="copyright">
        <hr />
        <p>
          <small>
            <AiOutlineCopyrightCircle /> Help Family Derechos reservados
          </small>
        </p>
      </div>
    </div>
  );
}

export default Contactanos;
