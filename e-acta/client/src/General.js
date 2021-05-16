import React from 'react';
import ReactDOM from 'react-dom';
import './css/general.css';
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';

export default class General extends React.Component {
  render() {
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
            <Card.Img variant="top" src="escuditoupm.png" />
                <div class="content">
                        <Card style={{ width: '100%',height:'100%', overflow:"auto"}}>
                        <Card.Body>
                            <Card.Text >
                            </Card.Text>
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