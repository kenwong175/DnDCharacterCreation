import React from 'react'
import Choices from './Choices';

function SpecificClass({sclass, setChoices, choices, setMyChoice}) {
    console.log(sclass);
    return (
        <div>
            {/* class name */}
            {/* {sclass.name} */}
            {sclass&&<div>{sclass.hit_die}</div>}
            {sclass.saving_throws&&sclass.saving_throws.map((el,i)=>
            <div key={i}>{el.name}</div>)}
            {sclass.proficiencies&&sclass.proficiencies.map((el,i)=>
            <div key={i}>{el.name}</div>)}
            {sclass.proficiency_choices&&sclass.proficiency_choices.map((el,i)=>
            <Choices setMyChoice={setMyChoice} key={i} index={i} choice={el.choose} selection={el} choices={choices} setChoices={setChoices}/>)}
        </div>
    )
}

export default SpecificClass
