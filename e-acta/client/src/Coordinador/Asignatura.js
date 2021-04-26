import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import  ListGroupItem from 'react-bootstrap/ListGroupItem';
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container"
import FormGroup from 'react-bootstrap/esm/FormGroup';
import Row from 'react-bootstrap/Row';
import '../css/coordinadorx/coord_asignatura.css'

export default class Asignatura extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            users : [
                {"user":"Manolo","nota":7},
                {"user":"Alejandro","nota":0},
                {"user":"Javier","nota":5},
                {"user":"Elvira","nota":5},
                {"user":"Andres","nota":5},
                {"user":"Pablo","nota":5},
                {"user":"Camilo","nota":3},
                {"user":"Ludovico","nota":10},
                {"user":"Manolo","nota":10},
                {"user":"Alejandro","nota":9},
                {"user":"Manolo","nota":7},
                {"user":"Alejandro","nota":0},
                {"user":"Javier","nota":5},
                {"user":"Elvira","nota":5},
                {"user":"Andres","nota":5},
                {"user":"Pablo","nota":5},
                {"user":"Camilo","nota":3},
                {"user":"Ludovico","nota":10},
                {"user":"Manolo","nota":10},
                {"user":"Alejandro","nota":9},
                
            ]
        };
      }
      update(){
          var oldusers = this.state
      }
      
    render() {
        //var notas=users.map((user)=>user.nota)
        /*function importar(u) {
            var usersimport = u.map((user)=>{
                user.nota = Math.random() * (10) ;
            })
            return usersimport;
        }*/
        console.log("eeeeeee",this.props.userAsig[0].idRol)
        return (
                <section>
                    <div class="titulo">
                        <h1>
                            Publicación de actas
                        </h1>
                    </div>
                    <Card style={{ width: '100%',height:'100%'}}>
                    <Card.Title>Acta {this.props.nombre}</Card.Title>
                    <div class="content">
                            <Card style={{ width: '100%',height:'30rem', overflow:"auto"}}>
                            <Card.Header></Card.Header>
                            <Card.Body>
                                <Card.Text >
                                     {this.state.users.map((user,key)=>
                                     <Container>
                                            <ListGroup horizontal className="my-2">
                                                <ListGroupItem xs={3}>{user.user}</ListGroupItem>
                                                <ListGroupItem xs={3}>{user.nota}</ListGroupItem>
                                            </ListGroup>
                                     </Container>
                                     )}
                                </Card.Text>
                            </Card.Body>
                            </Card>
                            {this.props.userAsig[0].idRol === 1 &&(
                            <Button variant="primary">Importar Notas</Button>
                            )}
                            {this.props.userAsig[0].idRol === 2 &&(
                                <Container>
                                    <Button variant="danger">Rechazar Acta</Button>
                                    <Button variant="primary">Aprobar Acta</Button>
                                </Container>
                            )}
                        <Card.Footer>
                            <button onClick={this.props.handlerStateChild}>Cancelar</button>
                            <button>Guardar</button>
                        </Card.Footer>
                        
                    </div> 
                    </Card>
                    
                </section>
        );
      }
}