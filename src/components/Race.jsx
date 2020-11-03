import React from 'react'
import { Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { getSpecificRace } from '../util/functions';
import SpecificRace from './SpecificRace';


function Race({race, srace, setSrace, setChoices, choices, setMyChoice}) {
    return (
        <div>
            <Navbar>
                <Navbar.Brand>Race</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <NavDropdown title="Choose your Race" id="basic-nav-dropdown">
                        {race.map((el, i) => (
                            <div key={i} className="text-center">
                                <NavLink onClick={() => getSpecificRace(el, setSrace, setMyChoice)} to={`/race`}>{el.name}</NavLink>
                            </div>
                        ))}
                    </NavDropdown>
                </Navbar.Collapse>
            </Navbar>
            <SpecificRace setMyChoice={setMyChoice} srace={srace} choices={choices} setChoices={setChoices}/>
        </div>
    )
}

export default Race
