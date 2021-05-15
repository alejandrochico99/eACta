import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import General from  './General.js';
import {Asignaturas} from  './Coordinador/Asignaturas.js';
import MisDatos from  './MisDatos.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Login';
import useToken from './useToken';

function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return (
      <Router>
        <Login setToken={setToken}/>
      </Router>)
  }
  return (
    <Router>
      <Switch> 
        <Route exact path="/">
          <General setToken={setToken}/>
        </Route>
        <Route path="/asignaturas">
          <Asignaturas setToken={setToken}/>
        </Route>
        <Route path="/datos">
          <MisDatos setToken={setToken}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
