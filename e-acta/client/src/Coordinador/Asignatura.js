import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import  ListGroupItem from 'react-bootstrap/ListGroupItem';
import InputGroup from "react-bootstrap/InputGroup";

export default class Asignatura extends React.Component{
    render() {
        var users = [
            {"user":"Manolo","nota":0},
            {"user":"Alejandro","nota":0},
            {"user":"Javier","nota":0},
            {"user":"Elvira","nota":0},
            {"user":"Andres","nota":0},
            {"user":"Pablo","nota":0},
            {"user":"Camilo","nota":0},
            {"user":"Ludovico","nota":0},
            {"user":"Manolo","nota":0},
            {"user":"Alejandro","nota":0},
            {"user":"Javier","nota":0},
            {"user":"Elvira","nota":0},
            {"user":"Andres","nota":0},
            {"user":"Pablo","nota":0},
            {"user":"Camilo","nota":0},
            {"user":"Ludovico","nota":0},
            {"user":"Ludovico","nota":0},
            {"user":"Manolo","nota":0},
            {"user":"Alejandro","nota":0},
            {"user":"Javier","nota":0},
            {"user":"Elvira","nota":0},
            {"user":"Andres","nota":0},
            {"user":"Pablo","nota":0},
            {"user":"Camilo","nota":0},
            {"user":"Ludovico","nota":0},
        ]
        /*function importar(u) {
            var usersimport = u.map((user)=>{
                user.nota = Math.random() * (10) ;
            })
            return usersimport;
        }*/
        
        return (
            <div class="general-content"> 
                <section>
                    <div class="titulo">
                        <h1>
                            Publicación de actas
                        </h1>
                    </div>
                    <Card style={{ width: '75%',height:'75%'}}>
                    <Card.Title>Acta {this.props.nombre}</Card.Title>
                    <div class="content">
                            <Card style={{ width: '100%',height:'30rem', overflow:"auto"}}>
                            <Card.Header></Card.Header>
                            <Card.Body>
                                <Card.Text >
                                     {users.map((user)=><ListGroup horizontal className="my-2"><ListGroupItem xs={3}>{user.user}</ListGroupItem><ListGroupItem xs={3}>{user.nota}</ListGroupItem> </ListGroup>)}
                                </Card.Text>
                            </Card.Body>
                            </Card>
                            <Button variant="primary">Importar Notas</Button>
                        <Card.Footer>
                            <button onClick={this.props.handlerStateChild}>Cancelar</button>
                            <button>Guardar</button>
                        </Card.Footer>
                    </div> 
                    </Card>           
                </section>
            </div>
        );
      }
}