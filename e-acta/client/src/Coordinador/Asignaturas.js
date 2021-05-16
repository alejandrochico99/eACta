import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '../css/coordinadorx/coord_asignaturas.css';
import {Link} from "react-router-dom";
import Asignatura from './Asignatura.js';
import FirmaActa from './FirmaActa.js';
import 'bootstrap/dist/css/bootstrap.css';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container"
import FormGroup from 'react-bootstrap/esm/FormGroup';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { local } from 'd3-selection';

export const Asignaturas = () =>{
    const[asig,setAsig] = useState([]);
    const[iduser,setIdUser] = useState(localStorage.getItem("iduser"));
    const[userName, setUserName] = useState("")
    const[asignaturaSelected,setAsignaturaSelected] = useState(false);
    const[asignaturaFirmaSelected,setAsignaturaFirmaSelected] = useState(false);
    const[indiceAsignatura,setIndiceAsignatura] = useState(-1);
    const[nombreAsignatura,setnombreAsignatura] = useState("");
    const[rolusers,setRolUser]=useState(localStorage.getItem("idroluser"));
    console.log("UseEffect Info Usuario:", rolusers);
    //FUTURA LLAMADA QUE NOS DIGA EL ROL DEL USUARIO A PARTIR DE SU NUMBRE DE USUARIO
    useEffect( async ()=>{
        if(iduser){
            console.log("iduser",rolusers);
            console.log("localStorage",localStorage.getItem("roltribunal")); 
            if(rolusers == localStorage.getItem("roltribunal")){
                let response = await axios.get('/app/api/usuarios/'+iduser);
                console.log("Usuario", response.data);
                setAsig(response.data.asignaturas)
                console.log("true",rolusers)
                setUserName(response.data.nombre + " " + response.data.apellidos)
            }
            else if(rolusers == 3){ //NOSE AHORA
                let response = await axios.get('/app/api/asignaturas');
                setAsig(response.data.asignaturas)
            }
        }else{
            console.log("Usuario");
            setIdUser(localStorage.getItem("iduser"));
            console.log("false",rolusers)
        }
        
    },[])
    /*useEffect(()=>{
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
    },[])*/
    function handlerState(){
        //console.log("userrr",rolusers);
        setAsignaturaSelected(false);
        setAsignaturaFirmaSelected(false);
    }
    function propsAsignatura(nombre,indice){
        setAsignaturaFirmaSelected(false);
        setAsignaturaSelected(true);
        setnombreAsignatura(nombre);
        setIndiceAsignatura(indice);
    }
    function firmaActas(nombre,indice){
        setAsignaturaSelected(false);
        setAsignaturaFirmaSelected(true);
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
            
            { !asignaturaSelected && !asignaturaFirmaSelected && rolusers == localStorage.getItem("roltribunal") &&
                <section>
                <Card style={{ width: '100%',height:'100%'}}>
                <Card.Title style={{ textAlign:'center'}}>Asignaturas de {userName}</Card.Title>
                <div class="content">
                        <Card style={{ width: '100%',height:'100%', overflow:"auto"}}>
                        <Card.Header></Card.Header>
                        <Card.Body>
                            <Card.Text >
                                 {asig.map((a)=>
                                 <Container>
                                        <ListGroup  horizontal className="my-2">
                                            <ListGroupItem variant="info" style={{width: '100%',textAlign:"center"}}>{a.nombreAsignaturas}</ListGroupItem>
                                            <ListGroupItem variant="info"><Button onClick={()=>propsAsignatura(a.nombreAsignaturas,0)}>Actas</Button></ListGroupItem>
                                            <ListGroupItem variant="info"><Button variant="danger" onClick={()=>firmaActas(a.nombreAsignaturas,0)}>FIRMAR</Button></ListGroupItem>
                                            {console.log("Map asignaturas",a)}
                                            {/*<ListGroupItem variant="info"><p>IMG asignatura</p></ListGroupItem>*/}
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

            { rolusers == localStorage.getItem("rolsecretaria") &&
                <section>
                <Card style={{ width: '100%',height:'100%'}}>
                <Card.Title style={{ textAlign:'center'}}>Miembro de secretaría: {userName}</Card.Title>
                <div class="content">
                        <Card style={{ width: '100%',height:'100%', overflow:"auto"}}>
                        <Card.Header></Card.Header>
                        <Card.Body>
                            <Card.Text >
                                 {asig.map((a)=>
                                 
                                 <Container>
                                        <ListGroup  horizontal className="my-2">
                                            <ListGroupItem variant="info" style={{width: '100%',textAlign:"center"}}>{a.nombreAsignaturas}</ListGroupItem>
                                            <ListGroupItem variant="info"><Button onClick={()=>propsAsignatura(a.nombreAsignaturas,0)}>Actas</Button></ListGroupItem>
                                            <ListGroupItem variant="info"><Button variant="danger" onClick={()=>firmaActas(a.nombreAsignaturas,0)}>FIRMAR</Button></ListGroupItem>
                                            {console.log("Map asignaturas",a)}
                                            {/*<ListGroupItem variant="info"><p>IMG asignatura</p></ListGroupItem>*/}
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

            {asignaturaSelected && !asignaturaFirmaSelected && rolusers == localStorage.getItem("roltribunal") && ( //coger los roles desde la bbdd
                <Asignatura nombre={nombreAsignatura} handlerStateChild={handlerState} idRolUser={rolusers}> </Asignatura> // modificar el componente para que dependiendo que botn pulsas, le pasa unas props al componente diferentes y renderiza la asignatura correcta
            )}
            {!asignaturaSelected && asignaturaFirmaSelected && rolusers == localStorage.getItem("roltribunal") && ( //cambiar roles
                <FirmaActa nombre={nombreAsignatura} handlerStateChild={handlerState} idRolUser={rolusers}> </FirmaActa> // modificar el componente para que dependiendo que botn pulsas, le pasa unas props al componente diferentes y renderiza la asignatura correcta
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