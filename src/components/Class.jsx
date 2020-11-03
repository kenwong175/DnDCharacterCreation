import React from 'react'
import { Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { getSpecificClass } from '../util/functions';
import SpecificClass from './SpecificClass';



function Class({classes, sclass, setSclass, setChoices, choices, setMyChoice}) {
    return (
        <div>
            <Navbar>
                <Navbar.Brand>Class</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <NavDropdown title="Choose your Class" id="basic-nav-dropdown">
                        {classes.map((el, i) => (
                            <div key={i} className="text-center">
                                <NavLink onClick={() => getSpecificClass(el, setSclass, setMyChoice)} to={`/class/${el.index}`}>{el.name}</NavLink>
                            </div>
                        ))}
                    </NavDropdown>
                </Navbar.Collapse>
            </Navbar>
            <SpecificClass setMyChoice={setMyChoice} sclass={sclass} choices={choices} setChoices={setChoices}/>
        </div>
    )
}

export default Class;
