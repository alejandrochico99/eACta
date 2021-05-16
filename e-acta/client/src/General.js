import React from 'react';
import ReactDOM from 'react-dom';
import './css/general.css';
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import { local } from 'd3-selection';
import axios from 'axios';

export default class General extends React.Component {
   
    constructor(props) {
        super(props);
        this.state =  {user:''};
    }

    async componentDidMount() {
        let response = await axios.get('/app/api/usuarios/'+localStorage.getItem("iduser"))
        this.setState({user: response.data.nombre + " " + response.data.apellidos})
    }
  render() {
    return (
        <div class="general-content">
            <nav>
                <button><Link to="/general">General</Link></button>
                <button><Link to="/asignaturas">Asignaturas</Link></button>
                {localStorage.getItem("idroluser") == localStorage.getItem("rolsecretaria") && (
                    <button><Link to="/alumnos">Expedientes</Link></button>
                )}
                
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
                            {this.state.user}
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
}