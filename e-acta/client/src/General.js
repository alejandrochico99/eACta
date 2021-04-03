import React from 'react';
import ReactDOM from 'react-dom';
import './css/general.css';
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
                <h1>Contenido</h1>
                <p>Aquí se colocará el Contenido </p>
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
        /*<div style={generalbody}>
            <div style={general_content}>
                <nav>
                    <button style={generalbutton}>General</button>
                    <button>Asignaturas</button>
                    <button>Mis Datos</button>
                    <button>Configuración</button>
                </nav>
                <section>
                    <h1>Contenido</h1>
                    <p>Aquí se colocará el Contenido </p>
                </section>
                <aside>
                    <div style = {userpanel}>
                        <h1>Panel de usuario</h1>
                        <div>
                            <p>Aqui va la información del usuario</p>
                        </div>
                    </div>
                    <div style = {generalhelp}>
                        <button>Ayuda</button>
                        <button>Contacto</button>
                    </div>
                </aside>
            </div>
        </div>*/
    );
  }
}