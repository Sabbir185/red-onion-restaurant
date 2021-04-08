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
    <div className='container-style'>
      <Router>
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/cart">
              <Home />
            </Route>

            <Route path="/login">
              <Home />
            </Route>

            <Route path="/signUp">
              <Home />
            </Route>

          </Switch>
      </Router>
    </div>
  );
}

export default App;
