import React from 'react'
import { Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { getSpecificRace } from '../util/functions';
import SpecificRace from './SpecificRace';


function Race({race, srace, setSrace}) {
    return (
        <div>
            <Navbar>
                <NavDropdown title="Choose your Race" id="basic-nav-dropdown">
                    {race.map((el,i) => (
                        <div key={i} className="text-center">
                            <NavLink onClick={()=>getSpecificRace(el,setSrace)} to={`/race/${el.index}`}>{el.name}</NavLink>
                        </div>
                    ))}
                </NavDropdown>
            </Navbar>
            <SpecificRace srace={srace}/>
        </div>
    )
}

export default Race
