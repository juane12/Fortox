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
                <h5 className="my-3"></h5>
                <p className="text-muted mb-1"></p>
                <p className="text-muted mb-4">Antioquia, Colombia</p>
                <div className="d-flex justify-content-center mb-3">
                  <button type="button" className="btn btn-primary">Editar Perfil</button>
                </div>
              </div>
            </div>
            <div className="card mb-4 mb-lg-0">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                  
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
                    <p className="text-muted mb-o"></p>
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Teléfono</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-o"></p>
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Local</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-o"></p>
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0"></p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-o"></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card mb-4 mb-mb-0">
                  <div className="card-body">
                    <p className="mb-4"><span className="text-primary font-italic me-1">Empresa:</span>Fortox</p>
                    
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