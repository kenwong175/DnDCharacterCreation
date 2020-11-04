import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { getClass, getRace, setAll, setChoices } from './util/functions';
import Race from './components/Race';
import Class from './components/Class';
import Overall from './components/Overall';
import AbilityScore from './components/AbilityScore';

function App() {

  const [allRace, setAllRace] = useState([]);
  const [specRace, setSpecRace] = useState([]);
  const [rChoices, setRaceChoice] = useState({});

  const [allClass, setAllClass] = useState([]);
  const [specClass, setSpecClass] = useState([]);
  const [cChoices, setClassChoice] = useState({});

  const [score, setScore] = useState({arr:[15,14,13,12,10,8],prof_bonus:2});

  const [overall, setOverall] = useState({});

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
            <Nav.Link><NavLink onClick={()=>overall&&setAll(overall, setOverall, specRace, specClass, score, rChoices, cChoices)}  to="/overall">Overall</NavLink></Nav.Link>
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
          <Class classes={allClass} srace={specRace} sclass={specClass} setSclass={setSpecClass} choices={cChoices} setMyChoice={setClassChoice} setChoices={setChoices}/>
        </Route>
        <Route path="/ability" >
          <h1>Ability Score</h1>
          <AbilityScore setScore={setScore} score={score}/>
        </Route>
        <Route path="/overall" >
          <h1>Overall</h1>
          <Overall overall={overall} score={score} srace={specRace} sclass={specClass} rChoices={rChoices} cChoices={cChoices}/>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
