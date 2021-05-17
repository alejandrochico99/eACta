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
  
    //FUTURA LLAMADA QUE NOS DIGA EL ROL DEL USUARIO A PARTIR DE SU NUMBRE DE USUARIO
    useEffect( async ()=>{
        if(iduser){

            if(rolusers == localStorage.getItem("roltribunal")){
                let response = await axios.get('/app/api/usuarios/'+iduser);
               
                setAsig(response.data.asignaturas)
              
                setUserName(response.data.nombre + " " + response.data.apellidos)
            }
            else if(rolusers == localStorage.getItem("rolsecretaria")){ // SECRETARIA
                let response = await axios.get('/app/api/asignaturas');
                setAsig(response.data);
                let response2 = await axios.get('/app/api/usuarios/'+iduser);
                setUserName(response2.data.nombre + " " + response2.data.apellidos)

            }
        }else{
            
            setIdUser(localStorage.getItem("iduser"));
           
        }
        
    },[])

    function handlerState(){
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
    },[asignaturaSelected]);

    async function showAsig(){
        var showAsignaturas
        let response = await axios.get('/app/api/asignaturas');
        if (response.data !== undefined) {
            showAsignaturas = response.data.map((a)=>{
                if(a.firmado1 && a.firmado2 && a.firmado3){ 
                    <Container>
                        <ListGroup  horizontal className="my-2">
                            <ListGroupItem variant="info">Acrónimo de la Asignatura: {a.siglas}</ListGroupItem>
                            <ListGroupItem variant="info">Nombre de la asignatura: {a.nombreAsignaturas}</ListGroupItem>
                            <ListGroupItem variant="info"><Button onClick={()=>propsAsignatura(a.nombreAsignaturas,0)}>Actas</Button></ListGroupItem>
                        </ListGroup>
                    </Container>
                    
                }
            })
         
        } 
        return showAsignaturas
    }

    return (
        <div class="general-content">
            <nav>
                <button><Link to="/general">General</Link></button>
                <button><Link to="/asignaturas">Asignaturas</Link></button>
                {localStorage.getItem("idroluser") == localStorage.getItem("rolsecretaria") &&(
                    <button><Link to="/alumnos">Expedientes</Link></button>
                )}
                <button><Link to="/">Logout</Link></button>
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
                                            {(!a.firmado1 || !a.firmado2 || !a.firmado3) &&
                                            <ListGroupItem variant="info"><Button variant="danger" onClick={()=>firmaActas(a.nombreAsignaturas,0)}>Firmar</Button></ListGroupItem>
                                            }
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

            { !asignaturaSelected && rolusers == localStorage.getItem("rolsecretaria") &&
                <section>
                <Card style={{ width: '100%',height:'100%'}}>
                <Card.Title style={{ textAlign:'center'}}>Miembro de secretaría: {userName}</Card.Title>
                <div class="content">
                        <Card style={{ width: '100%',height:'100%', overflow:"auto"}}>
                        <Card.Header></Card.Header>
                        <Card.Body>
                            <Card.Text >
                                {asig.filter(asigs => asigs.firmado1 && asigs.firmado2 && asigs.firmado3).map((a)=>
                                 <Container>
                                        <ListGroup  horizontal className="my-2">
                                            <ListGroupItem variant="info" style={{width: '100%',textAlign:"center"}}>{a.siglas}</ListGroupItem>
                                            <ListGroupItem variant="info" style={{width: '100%',textAlign:"center"}}>{a.nombreAsignaturas}</ListGroupItem>
                                            <ListGroupItem variant="info"><Button onClick={()=>propsAsignatura(a.nombreAsignaturas,0)}>Actas</Button></ListGroupItem>
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

            {asignaturaSelected  && ( //coger los roles desde la bbdd
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
                            {userName}
                        </Card.Text>
                        <Button variant="primary"><Link style={{color:"white"}} to="/datos">Mis Datos</Link></Button>
                    </Card.Body>
                    </Card>
                </div>
                <div class="general-help">
                  <Button variant="primary"><Link style={{color:"white"}} to="/contacto">Contacto</Link></Button>
                </div>
            </aside>
        </div>
    );
}