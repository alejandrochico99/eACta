import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./css/login.css";
import {Link} from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [uservalid, setUserValid] = useState(false);
  const [passwordvalid, setPasswordValid] = useState(false);

  
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
  function SaveUserData(){
    localStorage.clear();
    localStorage.setItem("username",email);
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
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Link to="/general">
            <Button onClick={()=> SaveUserData()} block size="lg" type="submit" disabled={!validateForm()}>
                Login
            </Button>
        </Link>
      </Form>
    </div>
  );
}