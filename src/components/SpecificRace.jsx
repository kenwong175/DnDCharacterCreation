import React from 'react'
import { Image, Row } from 'react-bootstrap';
import Choices from './Choices';

function SpecificRace({srace, setChoices, choices, setMyChoice}) {
    console.log(srace);
    return (
        <Row>
            <div className="col-4">
                <Image src={srace.pic} />
            </div>
            <div className="col-4">
                {srace.language_options && <Choices setMyChoice={setMyChoice} index={srace.language_options.choose} choice={srace.language_options.choose} choices={choices} selection={srace.language_options} setChoices={setChoices} />}
                {srace.starting_proficiency_options && <Choices setMyChoice={setMyChoice} index={srace.starting_proficiency_options.choose} choice={srace.starting_proficiency_options.choose} choices={choices} selection={srace.starting_proficiency_options} setChoices={setChoices} />}
                {srace.trait_options && <Choices setMyChoice={setMyChoice} index={srace.trait_options.choose} choice={srace.trait_options.choose} selection={srace.trait_options} choices={choices} setChoices={setChoices} />}
            </div>
            <div className="col-4">
                {/* ability bonus */}
                {srace.ability_bonuses && srace.ability_bonuses.map((el, i) =>
                    <div key={i}>{el.ability_score.name}: +{el.bonus}</div>)}
                {/* languages */}
                {srace.languages && srace.languages.map((el, i) =>
                    <div key={i}>{el.index}</div>)}
                {/* proficiencies & choice */}
                {srace.starting_proficiencies && srace.starting_proficiencies.map((el, i) =>
                    <div key={i}>{el.index}</div>)}
                {/* traits */}
                {srace.traits && srace.traits.map((el, i) =>
                    <div key={i}>{el.index}</div>)}
                {/* speed */}
                <div>{srace.speed}</div>
            </div>
        </Row>
    )
}

export default SpecificRace
