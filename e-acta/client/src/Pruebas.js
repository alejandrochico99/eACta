import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import {Card,Button} from "react-bootstrap";

export default class Asignatura extends React.Component{
    
    render() {
        return (
            <div class="general-content"> 
                <section>
                    <div class="titulo">
                        <h1>
                            Publicación de actas
                        </h1>
                    </div>
                    <div class="content">
                        <div class="user">
                            <div class="img">
                                <p>IMG asignatura</p>
                            </div>
                            <div class="div">
                                <p>Nombre completo de la asignatura: {this.props.nombre}</p>
                            </div>
                        </div>
                        <ul class="lista">
                            <Card>
                            <Card.Header>Featured</Card.Header>
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                            </Card>
                        </ul>
                        <div class="submit">
                            <button onClick={this.props.handlerStateChild}>Cancelar</button>
                            <button>Guardar</button>
                        </div>
                    </div>             
                </section>
            </div>
        );
      }
}