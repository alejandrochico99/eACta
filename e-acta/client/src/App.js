import logo from './logo.svg';
import './App.css';
import General from  './General.js';
import {Asignaturas} from  './Coordinador/Asignaturas.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Login';

function App() {

  return (
    <Router>
      <Switch> 
        <Route exact path="/" component={Login} />
        <Route exact path="/general" component={General} />
        <Route path="/asignaturas" component={Asignaturas} />
      </Switch>
    </Router>
  );
}

export default App;
