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
import '../css/coordinadorx/coord_asignatura.css';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import axios from 'axios';

export default class FirmaActa extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            users : [],
            rolsecretaria: 0,
            roltribunal:0,
            idasigfirma:0
        };
        this.firmar = this.firmar.bind(this); // flipante
      }
      async componentDidMount(){

        /******************************************************************************
         *********************CONTROL DE DATOS DE NOTAS********************************
         ******************************************************************************
        */
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
            this.setState({idasigfirma:idasig})
            var statealumnos = [];
            let responseasignatura = await axios.get('/app/api/notas/asignaturas/' + idasig)
            console.log("responseasignatura",responseasignatura.data)
            var data = responseasignatura.data;
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
            console.log("Data roles", rol);
        });
      }
      async   firmar(){
        const ida = this.state.idasigfirma;
        let firmas=[];
        let responseasignatura = await axios.get('/app/api/asignaturas/' + ida)
        console.log("asignatura",responseasignatura.data)
        let firmado1 = responseasignatura.data.firmado1;
        let firmado2 = responseasignatura.data.firmado2;
        let firmado3 = responseasignatura.data.firmado3;
        
        if(!firmado1 && !firmado2 && !firmado3){
            firmas.push(localStorage.getItem("iduser"))
           
        }
        if(firmado1 && !firmado2 && !firmado3){
            if(firmado1 != localStorage.getItem("iduser")){
                firmas.push(firmado1)
                firmas.push(localStorage.getItem("iduser")); 
            }else{
                firmas.push(firmado1)
                alert("Ya firmada por usted")
            }
        }
        if(firmado1 && firmado2 && !firmado3){
            if((firmado1 != localStorage.getItem("iduser"))&&(firmado2 != localStorage.getItem("iduser"))){
                firmas.push(firmado1)
                firmas.push(firmado2)
                firmas.push(localStorage.getItem("iduser"));
            }else{
                firmas.push(firmado1)
                firmas.push(firmado2)
                alert("Ya firmada por usted")
            }
               
        }
        if(firmado1 && firmado2 && firmado3){
            firmas.push(firmado1)
            firmas.push(firmado2)
            firmas.push(firmado3)
            alert("Ya firmada por usted")
            
        }
        if(firmas){
            let r = await axios.put('/app/api/asignaturas/'+ ida,firmas)
            if(firmado1 && firmado2 && firmado3){
                // se debería enviar el post para enviar los mensajes de publicación de actas a los alumnos a este endpoint: /api/email/sendAllMails+
                // pero solo tenemos una cuenta valida: p.rruiz@alumnos.upm.es, 
                //asi que solo enviaremos la nota a este correo con el endpoint que se va a usar a continuación:
                var mail = []
                //mail.push("p.rruiz@alumnos.upm.es")
                mail.push("secretaria.etsit.upm@gmail.com")
                mail.push("Calificaciones finales: "+ responseasignatura.data.nombreAsignaturas)
                let alumno = await axios.get("/app/api/usuarios/email/p.rruiz@alumnos.upm.es")
                let alumnoNota = await axios.get("/app/api/notas/get/alumno/"+alumno.data.id+"/"+ida)
                mail.push("Ha obtenido en "+responseasignatura.data.nombreAsignaturas+": "+alumnoNota.data.nota)
                let respNotas = await axios.post("app/api/email/sendMail", mail)
                console.log(respNotas)

            }
        }
       


      }
      
    render() {

       
        //var notas=users.map((user)=>user.nota)
        /*function importar(u) {
            var usersimport = u.map((user)=>{
                user.nota = Math.random() * (10) ;
            })
            return usersimport;
        }*/
       
        return (
                <section>
                    <div class="titulo">
                        <h1>
                            Firma de Actas
                        </h1>
                    </div>
                    <Card style={{ width: '100%',height:'100%'}}>
                    <Card.Title>Acta {this.props.nombre}</Card.Title>
                    <div class="content">
                            <Card style={{ width: '100%',height:'40rem', overflow:"auto"}}>
                            <Card.Header></Card.Header>
                            <Card.Body>
                                <Card.Text >
                                        <Row>
                                            <Col  md={2}>
                                                <Image src="isst_logo.png" rounded fluid />
                                            </Col>
                                            <Col md={9}>
                                                {this.state.users.map((user,key)=>
                                                <ListGroup horizontal className="my-2">
                                                    <ListGroupItem style={{width:"90%"}}>{user.user}</ListGroupItem>
                                                    <ListGroupItem xs={1}>{user.nota}</ListGroupItem>
                                                </ListGroup>
                                                )}
                                            </Col>
                                     </Row>
                                </Card.Text>
                            </Card.Body>
                            </Card>
                            <Card.Footer>
                                {this.props.idRolUser == this.state.roltribunal &&(
                                <Container>
                                    <Row className="justify-content-md-end">
                                    <Col xs lg="2">
                                        <Button onClick={this.props.handlerStateChild} variant="danger">Cancelar</Button>
                                        <Button onClick={()=>this.firmar()} style={{color:"white"}}>Firmar</Button>
                                    </Col>
                                    </Row>
                                </Container>
                                    )}
                            </Card.Footer>
                        
                    </div> 
                    </Card>
                    
                </section>
        );
      }
}