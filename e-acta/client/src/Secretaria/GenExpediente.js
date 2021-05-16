import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
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

export default class Asignatura extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        

        return (
            <section>
                <Card style={{ width: '100%',height:'100%'}}>
                    <Card.Title style={{ textAlign:'center'}}>Expediente</Card.Title>
                <div class="content">
                <Card style={{ width: '100%',height:'100%', overflow:"auto"}}>
                    <Card.Body>
                        <Card.Text >
                            {this.props.expediente.map((exp)=>
                                <Container>
                                    <ListGroup  horizontal className="my-2">
                                        <ListGroupItem variant="info" style={{width: '100%',textAlign:"center"}}>{exp.asignatura.nombreAsignaturas}</ListGroupItem>
                                        <ListGroupItem variant="info" style={{width: '100%',textAlign:"center"}}>{exp.nota}</ListGroupItem>
                                        {console.log("Map alumnos",exp)}
                                        {/*<ListGroupItem variant="info"><p>IMG asignatura</p></ListGroupItem>*/}
                                    </ListGroup>
                                </Container>
                            )}
                        </Card.Text>
                    </Card.Body>
                    
                </Card>
                </div>
                <Card.Footer>                            
                    <Button variant="btn btn-dark" onClick={this.props.handlerStateChild}>Volver Atrás</Button>
                </Card.Footer>
                </Card>
            </section>
            
        )

    }
    
}