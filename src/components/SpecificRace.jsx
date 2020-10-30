import React from 'react'
import Choices from './Choices';

function SpecificRace({srace}) {
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
            {srace.language_options&&<Choices choice={srace.language_options.choose} srace={srace.language_options}/>}
            {/* proficiencies & choice */}
            {srace.starting_proficiencies&&srace.starting_proficiencies.map((el,i)=>
            <div key={i}>{el.index}</div>)}
            {srace.starting_proficiency_options&&<Choices choice={srace.starting_proficiency_options.choose} srace={srace.starting_proficiency_options}/>}
            {/* traits */}
            {srace.traits&&srace.traits.map((el,i)=>
            <div key={i}>{el.index}</div>)}
            {srace.trait_options&&<Choices choice={srace.trait_options.choose} selection={srace.trait_options}/>}
            {/* speed */}
            <div>{srace.speed}</div>
            {/* subraces choice */}
            {srace.subraces&&srace.subraces.map((el,i)=>
            <div key={i}>{el.name}</div>)}
            
        </div>
    )
}

export default SpecificRace
