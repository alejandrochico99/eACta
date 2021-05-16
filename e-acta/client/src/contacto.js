import React from 'react';
import ReactDOM from 'react-dom';
import './css/login.css';
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container"
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import axios from 'axios';


export default class contacto extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          user: '',
          subject: '',
          email: '',
          message: ''
        }
      }

      async componentDidMount() {
        let response = await axios.get('/app/api/usuarios/'+localStorage.getItem("iduser"))
        this.setState({email: response.data.email})
        this.setState({user: response.data.nombre + " "+ response.data.apellidos})
    }
    
      render() {
        return(
            <div class="general-content">
            <nav>
                <button><Link to="/general">General</Link></button>
                <button><Link to="/asignaturas">Asignaturas</Link></button>
                {localStorage.getItem("idroluser") == localStorage.getItem("rolsecretaria") &&(
                    <button><Link to="/alumnos">Expedientes</Link></button>
                )}
                <button><Link to="/">Logout</Link></button>
            </nav>
            <section>
            <Card style={{ width: '100%',height:'100%'}}>
                <div class="content">
                        <Card style={{ width: '100%',height:'100%', overflow:"auto"}}>
                        <Card.Body>
                        <Card.Title style={{ textAlign:'center'}}>Formulario para contactar con secretaría </Card.Title>
                            <Card.Text >
                            




                            <div className="App">

                            

                                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)}>
                                <div className="form-group">
                                    <label htmlFor="subject">Asunto</label>
                                    <input type="text" className="form-control" value={this.state.subject} onChange={this.onSubjectChange.bind(this)} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Mensaje</label>
                                    <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                                </div>
                                <button type="submit" className="btn btn-primary">Enviar</button>
                                </form>
                            </div>




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
    
      onSubjectChange(event) {
        this.setState({subject: event.target.value})
      }
    
    
      onMessageChange(event) {
        this.setState({message: event.target.value})
      }
    
      handleSubmit(event) {
          const to= "secretaria.etsit.upm@gmail.com"
          var send = []
          send.push(to)
          const subject = this.state.email+": "+ this.state.subject
          send.push(subject)
          send.push(this.state.message)
          const resp = axios.post("/app/api/email/sendMail", send)
      
          alert("Correo enviado correctamente")
      }

    
    
}