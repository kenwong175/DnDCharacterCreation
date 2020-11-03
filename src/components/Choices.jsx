import React from 'react'
import { Navbar, NavDropdown } from 'react-bootstrap'

function Choices({choice, selection, setChoices, choices, index, setMyChoice}) {
    console.log(selection);
    return (
        <Navbar>
            <NavDropdown title={`Choose ${choice}`} id="basic-nav-dropdown">
                {selection && selection.from.map((el, i) =>
                    <div className={selection.type} onClick={(e)=>setChoices(e,choices,choice,index,setMyChoice)} choices={choices} key={i}>{el.name}</div>)}
            </NavDropdown>
        </Navbar>
    )
}

export default Choices
