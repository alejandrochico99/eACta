import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../css/login.css";
import {Link} from "react-router-dom";
import axios from 'axios';
import { local } from "d3-selection";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [uservalid, setUserValid] = useState(false);
  const [passwordvalid, setPasswordValid] = useState(false);
  const [user, setUser] = useState({})
  const [dis, setDis] = useState("\.");
  const [loginDenegado, setLoginDenegado] = useState(true);
  const[rolalumno,setRolAlumno] = useState(0)
  const general = "\general";
  const login = "\.";
  var directorio = "\.";
  var pwd;
  var usr;
 
  
  const users = [
      
  ];

  useEffect(async () =>{
    localStorage.clear();
  },[])
  function changeRoute() {
    if (password==user.password){
     setDis("\general");
    }
  }

  async function getUser() {
    let res = await axios.get('/app/api/usuarios/email/'+ email);
    setUser(res.data);
    if(res.data.idRol){
    
      localStorage.setItem("idroluser",res.data.idRol.id)
    }
    
    /**************************
         ********CONTROL DE DATOS DE ROLES***********
         **************************
        */
         let responseroles = await axios.get('/app/api/roles')
         responseroles.data.forEach(rol => {
             if(rol.nombreRol == "Alumno"){
                 setRolAlumno(rol.id)
                 localStorage.setItem("rolalumno",rol.id)
             }
             if(rol.nombreRol == "Tribunal"){
              setRolAlumno(rol.id)
              localStorage.setItem("roltribunal",rol.id)
            }
            if((rol.nombreRol == "Secretaria")|| (rol.nombreRol == "Secretaría")||(rol.nombreRol == "secretaria")){
              setRolAlumno(rol.id)
              localStorage.setItem("rolsecretaria",rol.id)
            }
            
         });
       


  }

  async function alerta(){
    if (password!==user.password){
      alert("Nombre de usuario o contraseña incorrecto.");
    }else{
      let res = await axios.get('/app/api/usuarios/email/'+ email);
      if(res.data.idRol.id == rolalumno){
      
      }
      localStorage.setItem("iduser",res.data.id);
    }
    
 

   
  }

  
  return(
    
    <div className="Login" onKeyPress={getUser} onMouseMove={changeRoute}>
     
    <Form >
    <img src="loginImage.jpeg" class="img-fluid" class="img-responsive center-block" alt="Responsive image"></img>
      <Form.Group size="lg" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          autoFocus
          input type="text" onChange={e => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group size="lg" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
         input type="password" onChange={e => setPassword(e.target.value)} 
        />
      </Form.Group>
      <Link to={dis}>
                <Button block size="lg" type="submit" disabled={false} onClick={alerta}>
                    Login
                </Button>
            </Link>
    </Form>
    </div>
  );
}