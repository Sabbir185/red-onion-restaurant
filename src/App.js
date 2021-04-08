import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';

function App() {

  return (
    <Router>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/Cart">
            <Home />
          </Route>

          <Route path="/Login">
            <Home />
          </Route>

          <Route path="/SignUp">
            <Home />
          </Route>

        </Switch>
    </Router>
  );
}

export default App;
