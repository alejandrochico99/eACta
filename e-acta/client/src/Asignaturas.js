import React from 'react';
import ReactDOM from 'react-dom';
import './css/coordinadorx/coord_asignatura.css';
import {Link} from "react-router-dom";

export default class General extends React.Component {
  render() {
    return (
        <div class="general-content">
            <nav>
                <button><Link to="/">General</Link></button>
                <button><Link to="/asignaturas">Asignaturas</Link></button>
                <button>Mis Datos</button>
                <button>Configuración</button>
            </nav>
            <section>
                <div class="titulo">
                    <h1>
                        Publicación de actas
                    </h1>
                </div>
                <div class="content">
                    <div class="user">
                        <div class="img">
                            <p>IMG asignatura</p>
                        </div>
                        <div class="div">
                            <p>Nombre completo de la asignatura</p>
                        </div>
                    </div>
                    <ul class="lista">
                        <li>
                            <p>Nombre del profesor</p>
                            <button>Ver actas</button>
                        </li>
                        <li>
                            <p>Nombre del profesor</p>
                            <button>Ver actas</button>
                        </li>
                        <li>
                            <p>Nombre del profesor</p>
                            <button>Ver actas</button>
                        </li>
                        <li>
                            <p>Nombre del profesor</p>
                            <button>Ver actas</button>
                        </li>
                        <li>
                            <p>Nombre del profesor</p>
                            <button>Ver actas</button>
                        </li>
                        <li>
                            <p>Nombre del profesor</p>
                            <button>Ver actas</button>
                        </li>
                        <li>
                            <p>Nombre del profesor</p>
                            <button>Ver actas</button>
                        </li>
                    </ul>
                    <div class="submit">
                        <button>Cancelar</button>
                        <button>Guardar</button>
                    </div>
                </div>             
            </section>
            <aside>
                <div class="user-panel">
                    <h1>Panel de usuario</h1>
                    <div>
                        <p>Aqui va la información del usuario</p>
                    </div>
                </div>
                <div class="general-help">
                    <button>Ayuda</button>
                    <button>Contacto</button>
                </div>
            </aside>
        </div>
    );
  }
}