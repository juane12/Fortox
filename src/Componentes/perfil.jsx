import React from "react";
import { RiGlobalFill } from 'react-icons/ri';
import { BsGithub } from 'react-icons/bs';
import { IoLogoTwitter } from 'react-icons/io';
import { BsInstagram }  from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { GrPersonalComputer } from 'react-icons/gr';

function Profile() {
  return(
    <section style={{backgroundColor:'#eee'}}>
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{width:'150px'}}/>
                <h5 className="my-3">Berg Ôttas</h5>
                <p className="text-muted mb-1">Experto en una amplia gama de areas</p>
                <p className="text-muted mb-4">Titiribi, Colombia</p>
                <div className="d-flex justify-content-center mb-3">
                  <button type="button" className="btn btn-primary">Editar Perfil</button>
                </div>
              </div>
            </div>
            <div className="card mb-4 mb-lg-0">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                  
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <RiGlobalFill/>
                    <p className="mb-0">@XxBergÔttas777x</p>
                  </li>
                  
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <BsGithub/>
                    <p className="mb-0">@Ana_Lisame_Esta</p>
                  </li>
                  
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <BsInstagram/>
                    <p className="mb-0">Instagram</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <BsFacebook/>
                    <p className="mb-0">Facebook</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <IoLogoTwitter/>
                    <p className="mb-0">Twitter</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <GrPersonalComputer/>
                    <p className="mb-0">Pagina Principal</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Nombre completo</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-o">Berg Ôttas</p>
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Edad</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-o">69 Años</p>
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Direcion</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-o">calle 45b sur</p>
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Fecha de nacimiento</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-o">1 de Enero de 1954</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card mb-4 mb-mb-0">
                  <div className="card-body">
                    <p className="mb-4"><span className="text-primary font-italic me-1">Habilidades:</span>Proyecto PPI</p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    
  );
  
}
export default Profile;