import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../css/coordinadorx/coord_asignaturas.css';
import {Link} from "react-router-dom";
import Asignatura from './Asignatura.js';

export const Asignaturas = () =>{
    return (
        <div class="general-content">
            <nav>
                <button><Link to="/">General</Link></button>
                <button><Link to="/asignaturas">Asignaturas</Link></button>
                <button>Mis Datos</button>
                <button>Configuración</button>
            </nav>
            <section>
                <div class="asignaturas">
                    <h1>Asignaturas de [Nombre Tutor]</h1>
                </div>
                
                <ul>
                    <li>
                        <button>Nombre completo de asignatura</button>
                        <button>Actas</button>
                        <div>
                            <p>IMG asignatura</p>
                        </div>
                    </li>
                    <li>
                        <button>Nombre completo de asignatura</button>
                        <button>Actas</button>
                        <div>
                            <p>IMG asignatura</p>
                        </div>
                    </li>
                    <li>
                        <button>Nombre completo de asignatura</button>
                        <button>Actas</button>
                        <div>
                            <p>IMG asignatura</p>
                        </div>
                    </li>
                    <li>
                        <button>Nombre completo de asignatura</button>
                        <button>Actas</button>
                        <div>
                            <p>IMG asignatura</p>
                        </div>
                    </li>
                    <li>
                        <button>Nombre completo de asignatura</button>
                        <button>Actas</button>
                        <div>
                            <p>IMG asignatura</p>
                        </div>
                    </li>
                    <li>
                        <button>Nombre completo de asignatura</button>
                        <button>Actas</button>
                        <div>
                            <p>IMG asignatura</p>
                        </div>
                    </li>
                </ul>
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