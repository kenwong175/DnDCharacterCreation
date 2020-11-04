import React from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { getSpecificClass } from '../util/functions';
import SpecificClass from './SpecificClass';



function Class({srace, classes, sclass, setSclass, setChoices, choices, setMyChoice}) {
    return (
        <div>
            <DropdownButton id="dropdown-basic-button" title={sclass.name?sclass.name:"Choose Your Class"}>
                {classes.map((el, i) => (
                    <div key={i} className="text-center">
                        <Dropdown.Item onClick={() => getSpecificClass(el, setSclass, setMyChoice, srace)} to={`/class/${el.index}`}>{el.name}</Dropdown.Item>
                    </div>
                ))}
            </DropdownButton>
            <SpecificClass setMyChoice={setMyChoice} sclass={sclass} choices={choices} setChoices={setChoices}/>
        </div>
    )
}

export default Class;
