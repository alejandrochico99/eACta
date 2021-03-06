import logo from './logo.svg';
import './App.css';
import General from  './General.js';
import {Asignaturas} from  './Coordinador/Asignaturas.js';
import MisDatos from  './MisDatos.js';
import {Alumnos} from './Secretaria/Expediente.js';
import Contacto from './contacto.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './examples/Login.js';

function App() {
  return (
    <Router>
      <Switch> 
        <Route exact path="/" component={Login} />
        <Route exact path="/general" component={General} />
        <Route path="/asignaturas" component={Asignaturas} />
        <Route path="/datos" component={MisDatos} />
        <Route path="/alumnos" component={Alumnos} />
        <Route path="/contacto" component={Contacto} />
      </Switch>
    </Router>
  );
}

export default App;
