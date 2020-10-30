import React from 'react'
import { Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { getSpecificClass } from '../util/functions';
import SpecificClass from './SpecificClass';



function Class({classes, sclass, setSclass}) {
    return (
        <div>
            <Navbar>
                <NavDropdown title="Choose your Class" id="basic-nav-dropdown">
                    {classes.map((el,i) => (
                        <div key={i} className="text-center">
                            <NavLink onClick={()=>getSpecificClass(el,setSclass)} to={`/class/${el.index}`}>{el.name}</NavLink>
                        </div>
                    ))}
                </NavDropdown>
            </Navbar>
            <SpecificClass sclass={sclass}/>
        </div>
    )
}

export default Class;
