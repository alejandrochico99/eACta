import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../css/login.css";
import {Link} from "react-router-dom";
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [uservalid, setUserValid] = useState(false);
  const [passwordvalid, setPasswordValid] = useState(false);
  const [user, setUser] = useState({})
  const [dis, setDis] = useState(false);
  
  const users = [
      {"user":"admin","password":"adminpass","idRol":1},
      {"user":"secretario","password":"secrepass","idRol":2}
  ];
  function validateForm() {
      if(!uservalid){
            users.forEach(element => {
            if(email == element.user) setUserValid(true);
        });
      }
      if(!passwordvalid){
        users.forEach(element => {
            if(password == element.password) setPasswordValid(true);
          });
      }
    return uservalid && passwordvalid ;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Usuario",email);
    console.log("Password",password);

  }

  async function getUser() {
    let res = await axios.get('/app/api/usuarios/email/'+ email) 
    setUser(res.data)
    console.log(user)
  }
  function SaveUserData(){
    //console.log(email)
    getUser() 
    if (user.password === password) {
      setDis(true)
      console.log("Conseguido")
    }
    else{
        setDis(false)
        console.log("Password: ",password)
        console.log("email: ",email)
        console.log("Error")
      
    }
  }
  
  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => {setEmail(e.target.value)
                              SaveUserData()}}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => {setPassword(e.target.value)
                             SaveUserData()}}
          />
        </Form.Group>
        <Link to="/general">
            <Button block size="lg" type="submit" disabled={!dis}>
                Login
            </Button>
        </Link>
      </Form>
    </div>
  );
}