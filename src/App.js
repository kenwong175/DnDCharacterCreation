import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { getClass, getRace, setChoices } from './util/functions';
import Race from './components/Race';
import Class from './components/Class';
import Overall from './components/Overall';

function App() {

  const [allRace, setAllRace] = useState([]);
  const [specRace, setSpecRace] = useState([]);

  const [allClass, setAllClass] = useState([]);
  const [specClass, setSpecClass] = useState([]);
  const [rChoices, setRaceChoice] = useState({});
  const [cChoices, setClassChoice] = useState({});

  useEffect(() => {
    getRace(setAllRace);
    getClass(setAllClass);
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
          <Race race={allRace} srace={specRace} setSrace={setSpecRace} choices={rChoices} setMyChoice={setRaceChoice} setChoices={setChoices}/>
        </Route>
        <Route path="/class" >
          <Class classes={allClass} sclass={specClass} setSclass={setSpecClass} choices={cChoices} setMyChoice={setClassChoice} setChoices={setChoices}/>
        </Route>
        <Route path="/ability" >
          <h1>Ability Score</h1>
        </Route>
        <Route path="/overall" >
          <h1>Overall</h1>
          <Overall srace={specRace} sclass={specClass} rChoices={rChoices} cChoices={cChoices}/>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
