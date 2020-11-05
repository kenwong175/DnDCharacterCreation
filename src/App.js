import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { Navbar, Nav, Button} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { getClass, getData, getRace, setAll, setChoices} from './util/functions';
import Race from './components/Race';
import Class from './components/Class';
import Overall from './components/Overall';
import AbilityScore from './components/AbilityScore';
import Login from './components/Login';
import PrivateRoute from './util/PrivateRoute';
import { SignOut } from './util/login';
import Characters from './components/Characters';

function App() {

  const [doc, setDoc] = useState("");
  const [characters, setChar] = useState([]);
  const [allRace, setAllRace] = useState([]);
  const [specRace, setSpecRace] = useState([]);
  const [rChoices, setRaceChoice] = useState({});

  const [allClass, setAllClass] = useState([]);
  const [specClass, setSpecClass] = useState([]);
  const [cChoices, setClassChoice] = useState({});

  const [score, setScore] = useState({arr:[15,14,13,12,10,8],prof_bonus:2});

  const [overall, setOverall] = useState({});

  const [query, setQuery] = useState("");
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    getRace(setAllRace);
    getClass(setAllClass);
  }, [])

  function changeHandler(e){
    setQuery((q) => ({ ...q, [e.target.name]: e.target.value }));
    console.log(query);
  }
  
  return (
    <Router >
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">D&D Character</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="tabs" className="mr-auto">
            <NavLink className="mx-1" to="/">Home</NavLink>
            <NavLink className="mx-1" onClick={()=>getData(setChar)} to="/char">Character</NavLink>
            <NavLink className="mx-1" to="/race">Race</NavLink>
            <NavLink className="mx-1" to="/class">Classes</NavLink>
            <NavLink className="mx-1" to="/ability">Ability Scores</NavLink>
            <NavLink className="mx-1" onClick={()=>overall&&setAll(doc, setOverall, specRace, specClass, score, rChoices, cChoices)}  to="/overall">Overall</NavLink>
          </Nav>
        </Navbar.Collapse>
        <Button onClick={()=>SignOut(setMsg)}>Sign Out</Button>
      </Navbar>

      <Switch>
        <Route path="/" exact>
          <Login setMsg={setMsg} msg={msg} query={query} changeHandler={changeHandler}/>
        </Route>
        <PrivateRoute path="/char" char={characters} component={Characters} setRace={setSpecRace} setClass={setSpecClass} setRChoice={setRaceChoice} setCChoice={setClassChoice} setScore={setScore} setDoc={setDoc} />
        <PrivateRoute path="/race" component={Race} race={allRace} srace={specRace} setSrace={setSpecRace} choices={rChoices} setMyChoice={setRaceChoice} setChoices={setChoices} />
        <PrivateRoute path="/class" component={Class} classes={allClass} srace={specRace} sclass={specClass} setSclass={setSpecClass} choices={cChoices} setMyChoice={setClassChoice} setChoices={setChoices}/>
        <PrivateRoute path="/ability" component={AbilityScore} setScore={setScore} score={score}/>
        <PrivateRoute path="/overall" component={Overall} overall={overall} score={score} srace={specRace} sclass={specClass} rChoices={rChoices} cChoices={cChoices}/>
      </Switch>

    </Router>
  );
}

export default App;
