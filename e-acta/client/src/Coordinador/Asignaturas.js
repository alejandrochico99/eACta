import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '../css/coordinadorx/coord_asignaturas.css';
import {Link} from "react-router-dom";
import Asignatura from './Asignatura.js';
import 'bootstrap/dist/css/bootstrap.css';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container"
import FormGroup from 'react-bootstrap/esm/FormGroup';
import Row from 'react-bootstrap/Row';
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
    var userName= localStorage.getItem("username");
    const[asignaturaSelected,setAsignaturaSelected] = useState(false);
    const[indiceAsignatura,setIndiceAsignatura] = useState(-1);
    const[nombreAsignatura,setnombreAsignatura] = useState("");
    const[users,setUser]=useState([]);
    console.log("UseEffect Info Usuario:", users);
    //FUTURA LLAMADA QUE NOS DIGA EL ROL DEL USUARIO A PARTIR DE SU NUMBRE DE USUARIO
    useEffect(()=>{
        if(localStorage.getItem("username")=="admin"){
            const usersApi = [
                {"user":"admin","password":"adminpass","idRol":1}
            ];
            setUser(usersApi);
        }
        if(localStorage.getItem("username")=="secretario"){
            const usersApi = [
                {"user":"secretario","password":"secrepass","idRol":2}
            ];
            setUser(usersApi);
        }
    },[])
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
        console.log("UserName",localStorage.getItem("username"));
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
                <Card style={{ width: '100%',height:'75%'}}>
                <Card.Title>Asignaturas de {localStorage.getItem("username")}</Card.Title>
                <div class="content">
                        <Card style={{ width: '100%',height:'30rem', overflow:"auto"}}>
                        <Card.Header></Card.Header>
                        <Card.Body>
                            <Card.Text >
                                 {asig.map((a)=>
                                 <Container>
                                        <ListGroup  horizontal className="my-2">
                                            <ListGroupItem variant="info" style={{width: '100%',textAlign:"center"}}>Nombre completo de {a.name}</ListGroupItem>
                                            <ListGroupItem variant="info"><Button onClick={()=>propsAsignatura(a.name,0)}>Actas</Button></ListGroupItem>
                                            <ListGroupItem variant="info"><p>IMG asignatura</p></ListGroupItem>
                                        </ListGroup>
                                 </Container>
                                 )}
                            </Card.Text>
                        </Card.Body>
                        </Card>
                </div> 
                </Card>
                </section>
                
             /*<section>
                <div class="asignaturas">
                    <h1>Asignaturas de {userName}</h1>
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
                        <button >Nombre completo de {asig[2].name}</button>
                        <button onClick={()=>propsAsignatura(asig[2].name,2)}>Actas</button>
                        <div>
                            <p>IMG asignatura</p>
                        </div>
                    </li>
                    <li>
                        <button >Nombre completo de {asig[3].name}</button>
                        <button onClick={()=>propsAsignatura(asig[3].name,3)}>Actas</button>
                        <div>
                            <p>IMG asignatura</p>
                        </div>
                    </li>
                    <li>
                        <button>Nombre completo de {asig[4].name}</button>
                        <button  onClick={()=>propsAsignatura(asig[4].name,4)}>Actas</button>
                        <div>
                            <p>IMG asignatura</p>
                        </div>
                    </li>
                </ul>
            </section>*/

            }
            {asignaturaSelected && (
                <Asignatura nombre={nombreAsignatura} handlerStateChild={handlerState} userAsig={users}> </Asignatura> // modificar el componente para que dependiendo que botn pulsas, le pasa unas props al componente diferentes y renderiza la asignatura correcta
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