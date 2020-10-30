import React from 'react'
import Choices from './Choices';

function SpecificClass({sclass}) {
    console.log(sclass);
    return (
        <div>
            {/* class name */}
            {sclass.name}
            <div>Hit Die: {sclass.hit_die}</div>
            {sclass.saving_throws&&sclass.saving_throws.map((el,i)=>
            <div key={i}>{el.name}</div>)}
            {sclass.proficiencies&&sclass.proficiencies.map((el,i)=>
            <div key={i}>{el.name}</div>)}
            {sclass.proficiency_choices&&sclass.proficiency_choices.map((el,i)=>
            <Choices key={i} choice={el.choose} selection={el}/>)}
        </div>
    )
}

export default SpecificClass
