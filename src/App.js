import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { getClass, getRace } from './util/functions';
import Race from './components/Race';

function App() {

  const [allRace, setAllRace] = useState([]);
  const [specRace, setSpecRace] = useState([]);

  useEffect(() => {
    getRace(setAllRace);
  }, [])

  return (
    <Router >
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">D&D Character</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="tabs" className="mr-auto">
            <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/race">Race</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/class">Classes</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/ability">Ability Scores</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/overall">Overall</NavLink></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route path="/" exact>
          <h1>Home</h1>
        </Route>
        <Route path="/race" >
          <h1>Race</h1>
          <Race race={allRace} srace={specRace} setSrace={setSpecRace}/>
        </Route>
        <Route path="/class" >
          <h1>Class</h1>
        </Route>
        <Route path="/ability" >
          <h1>Ability Score</h1>
        </Route>
        <Route path="/overall" >
          <h1>Overall</h1>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
