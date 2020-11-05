import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap';

function Score({name ,arr, id, score, selScore, setScore}) {
    return (
        <div className="col-4 my-3" id={id}> {name} ({id})
            <DropdownButton id="dropdown-basic-button" title={score[id]?score[id]:"Select"}>
                {arr.map((el,i)=>(
                    <Dropdown.Item key={i} onClick={()=>selScore(id,el,score,setScore)}>{el}</Dropdown.Item> ))}
            </DropdownButton>
        </div>
    )
}

export default Score
