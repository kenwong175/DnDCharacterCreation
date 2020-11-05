import React from 'react'
import { Image, Row } from 'react-bootstrap';
import Choices from './Choices';

function SpecificRace({srace, setChoices, choices, setMyChoice}) {
    return (
        <Row className="mt-3">
            <div className="col-4">
                <Image src={srace.pic} />
            </div>
            <div className="col-4">
                {srace.language_options && <Choices setMyChoice={setMyChoice} index={srace.language_options.choose} choice={srace.language_options.choose} choices={choices} selection={srace.language_options} setChoices={setChoices} />}
                {srace.starting_proficiency_options && <Choices setMyChoice={setMyChoice} index={srace.starting_proficiency_options.choose} choice={srace.starting_proficiency_options.choose} choices={choices} selection={srace.starting_proficiency_options} setChoices={setChoices} />}
                {srace.trait_options && <Choices setMyChoice={setMyChoice} index={srace.trait_options.choose} choice={srace.trait_options.choose} selection={srace.trait_options} choices={choices} setChoices={setChoices} />}
                <div className="mb-3"><b>Proficiencies:</b>
                    {choices.proficiencies0 && choices.proficiencies0.map(el => <div>{el}</div>)}
                    {choices.proficiencies1 && choices.proficiencies1.map(el => <div>{el}</div>)}
                    {choices.proficiencies2 && choices.proficiencies2.map(el => <div>{el}</div>)}
                    {choices.proficiencies3 && choices.proficiencies3.map(el => <div>{el}</div>)}
                </div>
                <div className="mb-3"><b>Trait:</b>
                    <div>{choices.trait1 ? choices.trait1 : "N/A"}</div>
                </div>
                <div className="mb-3"><b>Language:</b>
                    <div>{choices.languages1 ? choices.languages1 : "N/A"}</div>
                </div>
            </div>
            <div className="col-4">
                {/* ability bonus */}
                <div className="mb-3"><b>Ability bonus:</b> {srace.ability_bonuses && srace.ability_bonuses.map((el, i) =>
                    <div key={i}>{el.ability_score.name}: +{el.bonus}</div>)}
                </div>
                {/* languages */}
                <div className="mb-3 text"><b>Languages:</b>
                    {srace.languages && srace.languages.map((el, i) =>
                        <div key={i}>{el.index}</div>)}
                </div>
                {/* proficiencies & choice */}
                <div className="mb-3 text"><b>Starting Proficiencies:</b>
                    {srace.starting_proficiencies ? srace.starting_proficiencies.map((el, i) =>
                        <div key={i}>{el.index}</div>) : <div>{" N/A"}</div>}
                </div>
                {/* traits */}
                <div className="mb-3 text"><b>Traits:</b>
                    {srace.traits ? srace.traits.map((el, i) =>
                        <div key={i}>{el.index}</div>) : " N/A"}
                </div>
                {/* speed */}
                <div className="mb-3 "><b>Speed:</b> {srace.speed}</div>
            </div>
        </Row>
    )
}

export default SpecificRace
