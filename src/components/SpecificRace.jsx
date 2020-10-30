import React from 'react'

function SpecificRace({srace}) {
    console.log(srace);
    return (
        <div>
            {/* race name */}
            {srace.name}
            {/* ability bonus */}
            {srace.ability_bonuses&&srace.ability_bonuses.map((el,i)=>
            <div key={i}>{el.ability_score.name}: +{el.bonus}</div>)}
            {/* languages */}
            {srace.languages&&srace.languages.map((el,i)=>
            <div key={i}>{el.index}</div>)}
            {/* proficiencies & choice */}
            {srace.starting_proficiencies&&srace.starting_proficiencies.map((el,i)=>
            <div key={i}>{el.index}</div>)}
            {srace.starting_proficiency_options&&<div>{`Choose: ${srace.starting_proficiency_options.choose}`}</div>}
            {srace.starting_proficiency_options&&srace.starting_proficiency_options.from.map((el,i)=>
            <div key={i}>{el.name}</div>)}
            {/* traits */}
            {srace.traits&&srace.traits.map((el,i)=>
            <div key={i}>{el.index}</div>)}
            {/* speed */}
            <div>{srace.speed}</div>
            {/* subraces choice */}
            {srace.subraces&&srace.subraces.map((el,i)=>
            <div key={i}>{el.name}</div>)}
            
        </div>
    )
}

export default SpecificRace
