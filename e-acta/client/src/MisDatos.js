import React from 'react';
import ReactDOM from 'react-dom';
import './css/general.css';
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container"
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import axios from 'axios';

/*
<Card.Text >
                                {this.state.usuario.asignaturas.map((a)=>
                                 <Container>
                                        <ListGroup  horizontal className="my-2">
                                            <ListGroupItem variant="info" style={{width: '100%',textAlign:"center"}}>id: {a.id}</ListGroupItem>
                                            <ListGroupItem variant="info">Acrónimo de la Asignatura: {a.siglas}</ListGroupItem>
                                            <ListGroupItem variant="info">Nombre de la asignatura: {a.nombreAsignaturas}</ListGroupItem>
                                        </ListGroup>
                                 </Container>
                                 )}
                                </Card.Text>
*/

export default class MisDatos extends React.Component {

    constructor(props) {
        super(props);
        this.state =  {usuario:{}, rol:""};
    }

    async componentDidMount() {
        let response = await axios.get('/app/api/usuarios/'+localStorage.getItem("iduser"))
        let response2 = await axios.get('/app/api/roles/'+localStorage.getItem("idroluser"))
        this.setState({usuario: response.data, rol: response2.data.nombreRol})
        console.log(this.state.usuario)
        console.log(this.state)
        console.log("repuesta get: ",response);
    }
    update(){
        var oldusers = this.state
    }
  
    render() {
        var info
        var funciones
        if (this.state.usuario.asignaturas !== undefined) {
            info = this.state.usuario.asignaturas.map((a)=>
            <Container>
                   <ListGroup  horizontal className="my-2">
                       <ListGroupItem variant="info">Acrónimo de la Asignatura: {a.siglas}</ListGroupItem>
                       <ListGroupItem variant="info">Nombre de la asignatura: {a.nombreAsignaturas}</ListGroupItem>
                       
                   </ListGroup>
            </Container>
            )
         
        }
        if (this.state.usuario.idRol !== undefined) {
            if (this.state.usuario.idRol.funcionalidades !== undefined) {
                funciones = this.state.usuario.idRol.funcionalidades.map((a)=>
                <Container>
                    <ListGroup  horizontal className="my-2">
                        <ListGroupItem variant="info">Funcionalidad: {a.nombreFuncionalidad}</ListGroupItem>
                    </ListGroup>
                </Container>
            )
            }                     
        }

        return (
            <div class="general-content">
                <nav>
                    <button><Link to="/general">General</Link></button>
                    <button><Link to="/asignaturas">Asignaturas</Link></button>
                    <button><Link to="/alumnos">Expedientes</Link></button>
                    <button><Link to="/">Logout</Link></button>

                </nav>
                <section>
                <Card style={{ width: '100%',height:'100%'}}>
                <Card.Title style={{ textAlign:'center'}}>Miembro de(l) {this.state.rol}: {this.state.usuario.nombre} {this.state.usuario.apellidos}</Card.Title>
                    <div class="content">
                            <Card style={{ width: '100%',height:'100%', overflow:"auto"}}>
                            <Card.Header></Card.Header>
                            <Card.Title>Asignaturas del Profesor</Card.Title>
                            <Card.Body>
                            {info}                                
                            </Card.Body>
                            </Card>
                    </div>
                    <div class="content">
                            <Card style={{ width: '100%',height:'100%', overflow:"auto"}}>
                            <Card.Header></Card.Header>
                            <Card.Title>Funciones del Profesor</Card.Title>
                            <Card.Body>
                            {funciones}                                
                            </Card.Body>
                            </Card>
                    </div> 
                </Card>
                </section>
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
}