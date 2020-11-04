import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'

function Choices({choice, selection, setChoices, choices, index, setMyChoice}) {
    console.log(selection);
    return (
        <DropdownButton id="dropdown-basic-button" title={`Choose ${choice}`}>
            {selection && selection.from.map((el, i) =>
                <Dropdown.Item id={selection.type} onClick={(e) => setChoices(e, choices, choice, index, setMyChoice)} choices={choices} key={i}>{el.name}</Dropdown.Item>)}
        </DropdownButton>
    )
}

export default Choices
