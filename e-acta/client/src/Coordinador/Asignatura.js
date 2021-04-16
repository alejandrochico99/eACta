import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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
                    <Card style={{ width: '70rem',height:'' }}>
                    <div class="content">
                        <ul class="lista">
                            <Card>
                            <Card.Header></Card.Header>
                            <Card.Body>
                                <Card.Title>Acta {this.props.nombre}</Card.Title>
                                <Card.Text>
                                    <div>Alumno                                                 Nota:0</div>
                                    <div>Alumno                                                 Nota:0</div>
                                    <div>Alumno                                                 Nota:0</div>
                                    <div>Alumno                                                 Nota:0</div>
                                    <div>Alumno                                                 Nota:0</div>
                                    <div>Alumno                                                 Nota:0</div>
                                    <div>Alumno                                                 Nota:0</div>
                                    <div>Alumno                                                 Nota:0</div>
                                    <div>Alumno                                                 Nota:0</div>
                                    <div>Alumno                                                 Nota:0</div>
                                    <div>Alumno                                                 Nota:0</div>
                                    <div>Alumno                                                 Nota:0</div>
                                </Card.Text>
                                <Button variant="primary">Importar Notas</Button>
                            </Card.Body>
                            </Card>
                        </ul>
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