import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '../css/coordinadorx/coord_asignaturas.css';
import {Link} from "react-router-dom";
import Asignatura from '../Coordinador/Asignatura.js';
import 'bootstrap/dist/css/bootstrap.css';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container"
import FormGroup from 'react-bootstrap/esm/FormGroup';
import Row from 'react-bootstrap/Row';
import GenExpediente from './GenExpediente';
import axios from 'axios';

export const Alumnos = () =>{
    const[alum,setAlum] = useState([]); //Alum es un array con todos los usuarios
    useEffect( async ()=>{
        let response = await axios.get('/app/api/usuarios');
        // console.log("Usuario", response.data);
        setAlum(response.data)
    },[])
    var userName= localStorage.getItem("username");
    const[alumnoSelected,setAlumnoSelected] = useState(false);
    const[indiceAlumno,setIndiceAlumno] = useState(-1);
    const[nombreAlumno,setnombreAlumno] = useState("");
    const[apellidosAlumno, setApellidosAlumno] = useState("");
    const[user,setUser]=useState("");
    const[expediente, setExpediente] = useState([])
    console.log("UseEffect Info Usuario:", user);
    //FUTURA LLAMADA QUE NOS DIGA EL ROL DEL USUARIO A PARTIR DE SU NUMBRE DE USUARIO
    /*(()=>{
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
    /*
    function handlerState(){
        console.log("userrr",users);
        //setAlumnoSelected(false);
        setAsignaturaFirmaSelected(false);
    }*/
    useEffect(async ()=>{
        const response = await axios.get('/app/api/usuarios/'+localStorage.getItem("iduser"))
        setUser(response.data.nombre + " " + response.data.apellidos)
    })
    async function propsAlumno(nombre,indice, id, apellidos){
        var fullExp = []
        setAlumnoSelected(true);
        setnombreAlumno(nombre);
        setApellidosAlumno(apellidos)
        setIndiceAlumno(indice);
        const response = await axios.get("/app/api/notas/alumnos/"+id)
        setExpediente(response.data)
        alert("Generado y enviado el Expediente")
        fullExp.push(nombre)
        fullExp.push(apellidos)
        response.data.forEach(nota => {fullExp.push(nota.asignatura.nombreAsignaturas); fullExp.push(nota.nota);} )
        //console.log(fullExp)
        console.log(fullExp)
        const resp = axios.post("/app/api/email/sendGrades/secretaria.etsit.upm@gmail.com", fullExp)
    }

    function handlerState(){
        setAlumnoSelected(false);
    }

    useEffect(()=>{
        console.log("alumnoSelected: ", alumnoSelected);
        console.log("Indice: ", indiceAlumno);
        console.log("Nombre: ", nombreAlumno);
        console.log("UserName",localStorage.getItem("username"));
    },[alumnoSelected]);

    return (
        <div class="general-content">
            <nav>
                <button><Link to="/general">General</Link></button>
                <button><Link to="/asignaturas">Asignaturas</Link></button>
                <button><Link to="/alumnos">Expedientes</Link></button>
                <button><Link to="/">Logout</Link></button>
            </nav>

            { !alumnoSelected &&
            <section>
                <Card style={{ width: '100%',height:'100%'}}>
                    <Card.Title style={{ textAlign:'center'}}>Alumnos</Card.Title>
                    <div class="content">
                        <Card style={{ width: '100%',height:'100%', overflow:"auto"}}>
                            <Card.Header></Card.Header>
                            <Card.Body>
                                <Card.Text >
                                    {alum.filter(alum1 => alum1.idRol.id == localStorage.getItem("rolalumno")).map((a)=>
                                        <Container>
                                            <ListGroup  horizontal className="my-2">
                                                <ListGroupItem variant="info" style={{width: '100%',textAlign:"center"}}>{a.nombre + " " + a.apellidos}</ListGroupItem>
                                                <ListGroupItem variant="info"><Button onClick={()=>propsAlumno(a.nombre,0,a.id, a.apellidos)}>Generar expediente</Button></ListGroupItem>
                                                {console.log("Map alumnos",a)}
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

            { alumnoSelected &&
                <GenExpediente nombre={nombreAlumno} apellidos={apellidosAlumno} expediente={expediente} handlerStateChild={handlerState}/>
            }

            <aside>
                <div style={{height:'70%'}}>
                    <Card  style={{ width: '100%',height:'100%'}}>
                        <Card.Img variant="top" src="useranonimo.png" />
                        <Card.Body style={{ width: '100%',height:'100%'}}>
                            <Card.Title>Panel de Usuario</Card.Title>
                            <Card.Text>
                                {user}
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

export default Alumnos;