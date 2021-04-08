import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Breakfast from './components/Breakfast/Breakfast';
import Dinner from './components/Dinner/Dinner';
import Lunch from './components/Lunch/Lunch';

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

            <Route path="/breakfast">
              <Breakfast />
            </Route>

            <Route path="/dinner">
              <Dinner />
            </Route>

            <Route path="/lunch">
              <Lunch />
            </Route>

          </Switch>
      </Router>
    </div>
  );
}

export default App;
