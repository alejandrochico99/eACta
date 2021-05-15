import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./css/login.css";
import {Link} from "react-router-dom";
import axios from 'axios';
import PropTypes from 'prop-types';


export default function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({})
  const [dis, setDis] = useState("\.");

  async function getUser() {
    let res = await axios.get('/app/api/usuarios/email/'+ email);
    setUser(res.data);
  }

  function alerta(){
    if (password!==user.password){
      alert("Nombre de usuario o contraseña incorrecto.");
    }else{
      setToken(true)
    }
  }

  
  return(
    
    <div className="Login" onKeyPress={getUser}>
    <Form >
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

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}