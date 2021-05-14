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
import '../ImportFiles';
import ImportFiles from '../ImportFiles';
import axios from 'axios';
                
export default class Asignatura extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            users : [],
            updated: 0
        };
      }
      async componentDidMount(){
        let idasig = 0;
        let responseasig = await axios.get('/app/api/asignaturas');
        const asignaturas = responseasig.data;
        //console.log("Asignaturas", asignaturas);
        asignaturas.forEach(element => {
            //console.log("elemento asignaturas", element)
            //console.log("nombre props", this.props.nombre)
            if(this.props.nombre == element.nombreAsignaturas){
                idasig = element.id;
                console.log("id",idasig);
            }
        });
        if(idasig){
            var statealumnos = [];
            let responseasignatura = await axios.get('/app/api/notas/asignaturas/' + idasig)
            console.log("responseasignatura",responseasignatura.data)
            var data = responseasignatura.data;
            data.forEach(al => {
                statealumnos.push({"user":al.usuario.nombre,"nota":al.nota})
            });
            this.setState({ users: statealumnos})
        }
      }
     
    async  importbutton  ()  {
       
        
        let idasig = 0;
        let responseasig = await axios.get('/app/api/asignaturas');
        const asignaturas = responseasig.data;
        //console.log("Asignaturas", asignaturas);
        asignaturas.forEach(element => {
            //console.log("elemento asignaturas", element)
            //console.log("nombre props", this.props.nombre)
            if(this.props.nombre == element.nombreAsignaturas){
                idasig = element.id;
                console.log("id",idasig);
            }
        });
        if(idasig){
            var statealumnos = [];
            let responseasignatura = await axios.get('/app/api/notas/asignaturas/' + idasig)
            console.log("responseasignatura",responseasignatura.data)
            var data = responseasignatura.data;
            data.forEach(al => {
                statealumnos.push({"user":al.usuario.nombre,"nota":al.nota})
            });
            this.setState({ users: statealumnos})
        }
        
    }
    render() {
        
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
                                                    <ListGroupItem style={{width:"90%"}}>{user.user}</ListGroupItem>
                                                    <ListGroupItem xs={1}>{user.nota}</ListGroupItem>
                                             </ListGroup>
                                     </Container>
                                     )}
                                </Card.Text>
                            </Card.Body>
                            </Card>
                            {this.props.userAsig[0].idRol === 1 &&(
                                <Container>
                                    <Button variant="primary"><ImportFiles nombre={this.props.nombre}>Importar</ImportFiles></Button>,
                                    <Button variant="danger" onClick={() => this.importbutton()}>Reload</Button>
                                </Container>
                            
                           
                            )}
                            {this.props.userAsig[0].idRol === 2 &&(
                                <Container>
                                    <Button variant="danger">Rechazar Acta</Button>
                                    <Button variant="primary">Aprobar Acta</Button>
                                </Container>
                            )}
                        <Card.Footer>
                            <button onClick={this.props.handlerStateChild}>Cancelar</button>
                            <button onClick={() => this.importbutton()}>Guardar</button>
                        </Card.Footer>
                        
                    </div> 
                    </Card>
                    
                </section>
        );
      }
}