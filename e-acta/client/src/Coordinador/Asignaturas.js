import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '../css/coordinadorx/coord_asignaturas.css';
import {Link} from "react-router-dom";
import Asignatura from './Asignatura.js';
import 'bootstrap/dist/css/bootstrap.css';

export const Asignaturas = () =>{
    const asig=[
        {
            "name":"ISST"
        },
        {
            "name": "RDOR"
        },
        {
            "name": "COPT"
        },
        {
            "name": "IACR"
        },
        {
            "name": "IWEB"
        },
        {
            "name": "DORE"
        }
    ];

    const[asignaturaSelected,setAsignaturaSelected] = useState(false);
    const[indiceAsignatura,setIndiceAsignatura] = useState(-1);
    const[nombreAsignatura,setnombreAsignatura] = useState("");


    
    function handlerState(){
        setAsignaturaSelected(false);
    }
    function propsAsignatura(nombre,indice){
        setAsignaturaSelected(true);
        setnombreAsignatura(nombre);
        setIndiceAsignatura(indice);
    }
    useEffect(()=>{
        console.log("AsignaturaSelected: ", asignaturaSelected);
        console.log("Indice: ", indiceAsignatura);
        console.log("Nombre: ", nombreAsignatura);
    },[asignaturaSelected]);

    return (
        <div class="general-content">
            <nav>
                <button><Link to="/general">General</Link></button>
                <button><Link to="/asignaturas">Asignaturas</Link></button>
                <button>Mis Datos</button>
                <button>Configuración</button>
            </nav>
            { !asignaturaSelected &&
            <section>
                <div class="asignaturas">
                    <h1>Asignaturas de [Nombre Tutor]</h1>
                </div>
                
                <ul>
                    <li>
                        <button >Nombre completo de {asig[0].name}</button>
                        <button onClick={()=>propsAsignatura(asig[0].name,0)}>Actas</button>
                        <div>
                            <p>IMG asignatura</p>
                        </div>
                    </li>
                    <li>
                        <button >Nombre completo de {asig[1].name}</button>
                        <button onClick={()=>propsAsignatura(asig[1].name,1)}>Actas</button>
                        <div>
                            <p>IMG asignatura</p>
                        </div>
                    </li>
                    <li>
                        <button onClick={()=>propsAsignatura(asig[2].name,2)}>Nombre completo de {asig[2].name}</button>
                        <button>Actas</button>
                        <div>
                            <p>IMG asignatura</p>
                        </div>
                    </li>
                    <li>
                        <button onClick={()=>propsAsignatura(asig[3].name,3)}>Nombre completo de {asig[3].name}</button>
                        <button>Actas</button>
                        <div>
                            <p>IMG asignatura</p>
                        </div>
                    </li>
                    <li>
                        <button onClick={()=>propsAsignatura(asig[4].name,4)}>Nombre completo de {asig[4].name}</button>
                        <button>Actas</button>
                        <div>
                            <p>IMG asignatura</p>
                        </div>
                    </li>
                </ul>
            </section>
            }
            {asignaturaSelected && (
                <Asignatura nombre={nombreAsignatura} handlerStateChild={handlerState}></Asignatura> // modificar el componente para que dependiendo que botn pulsas, le pasa unas props al componente diferentes y renderiza la asignatura correcta
            )}
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