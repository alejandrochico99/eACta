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
        },
        {
            "name": "IACR"
        },
        {
            "name": "IWEB"
        },
        {
            "name": "DORE"
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
                <button><Link to="/datos">Mis Datos</Link></button>
                <button>Configuración</button>
            </nav>
            
            { !asignaturaSelected &&
                <section>
                <Card style={{ width: '100%',height:'100%'}}>
                <Card.Title style={{ textAlign:'center'}}>Asignaturas de {localStorage.getItem("username")}</Card.Title>
                <div class="content">
                        <Card style={{ width: '100%',height:'100%', overflow:"auto"}}>
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

            }
            {asignaturaSelected && (
                <Asignatura nombre={nombreAsignatura} handlerStateChild={handlerState} userAsig={users}> </Asignatura> // modificar el componente para que dependiendo que botn pulsas, le pasa unas props al componente diferentes y renderiza la asignatura correcta
            )}
            <aside>
                <div style={{height:'70%'}}>
                <Card  style={{ width: '100%',height:'100%'}}>
                    <Card.Img variant="top" src="useranonimo.png" />
                    <Card.Body style={{ width: '100%',height:'100%'}}>
                        <Card.Title>Panel de Usuario</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary"><Link style={{color:"black"}} to="/datos">Go somewhere</Link></Button>
                    </Card.Body>
                    </Card>
                </div>
                <div class="general-help">
                    <Button variant="primary">Ayuda</Button>
                    <Button variant="primary">Contacto</Button>
                </div>
            </aside>
        </div>
    );
}