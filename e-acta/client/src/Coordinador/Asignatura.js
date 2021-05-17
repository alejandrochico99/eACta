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
            asignatura : {},
            rolsecretaria: 0,
            roltribunal:0
        };
      }
      async componentDidMount(){

        /******************************************************************************
         *********************CONTROL DE DATOS DE NOTAS********************************
         ******************************************************************************
        */
        let idasig = 0;
        let responseasig = await axios.get('/app/api/asignaturas');
        const asignaturas = responseasig.data;
     
        asignaturas.forEach(element => {

            if(this.props.nombre == element.nombreAsignaturas){
                idasig = element.id;
             
            }
        });
        if(idasig){
            var statealumnos = [];
            let responseasignatura = await axios.get('/app/api/notas/asignaturas/' + idasig)
            let responseasig2 = await axios.get('/app/api/asignaturas/'+idasig);
            var data = responseasignatura.data;
            this.setState({ asignatura: responseasig2.data })
            data.forEach(al => {
                statealumnos.push({"user":al.usuario.nombre + " "+al.usuario.apellidos,"nota":al.nota})
            });
            this.setState({ users: statealumnos})
        }


        /******************************************************************************
         *********************CONTROL DE DATOS DE ROLES********************************
         ******************************************************************************
        */
        let responseroles = await axios.get('/app/api/roles')
        
        responseroles.data.forEach(rol => {
            if(rol.nombreRol == "Tribunal"){
                this.setState({roltribunal: rol.id})
            }
            if(rol.nombreRol == "Secretaria"){
                this.setState({rolsecretaria: rol.id})
            }
           
        });
      }
     
    async  importbutton  ()  {
       
        
        let idasig = 0;
        let responseasig = await axios.get('/app/api/asignaturas');
        const asignaturas = responseasig.data;
      
        asignaturas.forEach(element => {

            if(this.props.nombre == element.nombreAsignaturas){
                idasig = element.id;
              
            }
        });
        if(idasig){
            var statealumnos = [];
            let responseasignatura = await axios.get('/app/api/notas/asignaturas/' + idasig)
         
            var data = responseasignatura.data;
            data.forEach(al => {
                statealumnos.push({"user":al.usuario.nombre + " " + al.usuario.apellidos,"nota":al.nota})
            });
            this.setState({ users: statealumnos})
        }
        
    }
    render() {
        

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
                            <Card style={{ width: '100%',height:'100%', overflow:"auto"}}>
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
                            {this.props.idRolUser == this.state.roltribunal &&( //Tribunal
                                
                                <Container>
                                    {!this.state.asignatura.subidas && 
                                    <Button variant="primary"><ImportFiles nombre={this.props.nombre}>Importar</ImportFiles></Button>
                                    }
                                    <Button variant="danger" onClick={() => this.importbutton()}>Reload</Button>
                                </Container>
                            
                           
                            )}
                        <Card.Footer>
                            
                            <Button variant="btn btn-dark" onClick={this.props.handlerStateChild}>Volver Atrás</Button>
                        </Card.Footer>
                        
                    </div> 
                    </Card>
                    
                </section>
        );
      }
}