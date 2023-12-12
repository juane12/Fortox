import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import fortox from "../Imagenes/fortox.png";

function FormularioRegistro() {
    const [datos, setDatos] = useState([]);
    const [form, setForm] = useState({
        Id: '',
        Nombres: '',
        Apellidos: '',
        Teléfono: '',
        Contraseña: '',
        local: ''
    });

    useEffect(() => {
        peticionGet();
    }, []);

    const peticionGet = () => {
        axios.get('https://media-tecnica-help-family.juan-esteban210.repl.co/api/usarios')
            .then((response) => {
                setDatos(response.data);
            })
            .catch(error => {
                console.log(error.message);
            });
    };

    const peticionPost = async () => {
        delete form.Id;
        await axios.post('https://media-tecnica-help-family.juan-esteban210.repl.co/api/usarios', form)
            .then(response => {
                alert('Bienvenido');
            })
            .catch(error => {
                console.log(error.message);
            });
    };

    const handleChange = (e) => {
        e.persist();
        setForm((prevForm) => ({
            ...prevForm,
            [e.target.name]: e.target.value
        }));
        console.log(form);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="mx-auto text-center">
                    <h1>Regístrate</h1>
                    <img src={fortox} alt= "logo" className="mx-auto" style= {{maxWidth:"500px"}}/>
                </div>
                <div className="container pb-3">
                    <div className="mx-auto" style={{ maxWidth: "500px" }}>
                        <form className="row g-3" noValidate="">
                            <div className="col-12">
                                <label htmlFor="inputAddress" className="form-label">
                                    <strong>Nombres</strong>
                                </label>
                                <input type="text" className="form-control" name="Nombres" id="Usuarios" placeholder="Nombres" required="" onChange={handleChange} value={form.Nombres}></input>
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress" className="form-label">
                                    <strong>Apellidos</strong>
                                </label>
                                <input type="text" className="form-control" name="Apellidos" id="Usuario" placeholder="Apellidos" required="" onChange={handleChange} value={form.Apellidos}></input>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="form-label">
                                    <strong>Teléfono</strong>
                                </label>
                                <input type="email" className="form-control" name="numero" id="cellphone" onChange={handleChange} value={form.Teléfono}></input>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputPassword4" className="form-label">
                                    <strong>Contraseña</strong>
                                </label>
                                <input type="password" className="form-control" name="Contraseña" id="Contrasena" onChange={handleChange} value={form.Contraseña}></input>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputState" className="form-label">
                                    <strong>Local</strong>
                                </label>

<select id="inputlocal" className="form-select" name="Local" onChange={handleChange} value={form.local}>

                                    <option value="Éxito">Éxito</option>
                                    <option value="Falabella">Falabella</option>
                                    <option value="Smartfit">Smartfit</option>
                                </select>
                            </div>
                            <div className="col-12">
                                <Link to="/homeL">
                                    <button className="btn btn-primary" type="submit" onClick={peticionPost}><font style={{ marginRight: 'vertical-align: inherit' }}>Registrarme</font></button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormularioRegistro;
