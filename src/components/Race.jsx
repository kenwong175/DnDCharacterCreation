import React from 'react'
import { DropdownButton, Dropdown} from 'react-bootstrap';
import { getSpecificRace } from '../util/functions';
import SpecificRace from './SpecificRace';


function Race({race, srace, setSrace, setChoices, choices, setMyChoice}) {
    return (
        <div>
            <DropdownButton id="dropdown-basic-button" title={srace.name?srace.name:"Choose Your Race"}>
                {race.map((el, i) => (
                    <div key={i} className="text-center">
                        <Dropdown.Item onClick={() => getSpecificRace(el, setSrace, setMyChoice)} to={`/race`}>{el.name}</Dropdown.Item>
                    </div>
                ))}
            </DropdownButton>
            <SpecificRace setMyChoice={setMyChoice} srace={srace} choices={choices} setChoices={setChoices}/>
        </div>
    )
}

export default Race
