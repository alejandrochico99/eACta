import logo from './logo.svg';
import './App.css';
import General from  './General.js';
import Asignaturas from  './Asignaturas.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={General} />
        <Route path="/asignaturas" component={Asignaturas} />
      </Switch>
    </Router>
  );
}

export default App;
