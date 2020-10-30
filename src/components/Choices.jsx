import React from 'react'
import { Navbar, NavDropdown } from 'react-bootstrap'

function Choices({choice, selection}) {
    return (
        <Navbar>
            <NavDropdown title={`Choose ${choice}`} id="basic-nav-dropdown">
                {selection && selection.from.map((el, i) =>
                    <div key={i}>{el.name}</div>)}
            </NavDropdown>
        </Navbar>
    )
}

export default Choices
