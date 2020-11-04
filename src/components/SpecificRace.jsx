import React from 'react'
import Choices from './Choices';

function SpecificRace({srace, setChoices, choices, setMyChoice}) {
    console.log(srace);
    return (
        <div>
            {/* race name */}
            {/* {srace.name} */}
            {/* ability bonus */}
            {srace.ability_bonuses&&srace.ability_bonuses.map((el,i)=>
            <div key={i}>{el.ability_score.name}: +{el.bonus}</div>)}
            {/* languages */}
            {srace.languages&&srace.languages.map((el,i)=>
            <div key={i}>{el.index}</div>)}
            {srace.language_options&&<Choices setMyChoice={setMyChoice} index={srace.language_options.choose} choice={srace.language_options.choose} choices={choices} selection={srace.language_options} setChoices={setChoices}/>}
            {/* proficiencies & choice */}
            {srace.starting_proficiencies&&srace.starting_proficiencies.map((el,i)=>
            <div key={i}>{el.index}</div>)}
            {srace.starting_proficiency_options&&<Choices setMyChoice={setMyChoice} index={srace.starting_proficiency_options.choose} choice={srace.starting_proficiency_options.choose} choices={choices} selection={srace.starting_proficiency_options} setChoices={setChoices}/>}
            {/* traits */}
            {srace.traits&&srace.traits.map((el,i)=>
            <div key={i}>{el.index}</div>)}
            {srace.trait_options&&<Choices setMyChoice={setMyChoice} index={srace.trait_options.choose} choice={srace.trait_options.choose} selection={srace.trait_options} choices={choices} setChoices={setChoices} />}
            {/* speed */}
            <div>{srace.speed}</div>
        </div>
    )
}

export default SpecificRace
