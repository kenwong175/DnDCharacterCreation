import React from 'react'
import { Image, Row } from 'react-bootstrap';
import Choices from './Choices';

function SpecificClass({sclass, setChoices, choices, setMyChoice}) {
    console.log(choices);
    return (
        <Row className="mt-3">
            <div className="col-4">
                <Image src={sclass.pic} />
            </div>
            <div className="col-4">
                {sclass.proficiency_choices && sclass.proficiency_choices.map((el, i) =>
                    <Choices setMyChoice={setMyChoice} key={i} index={i} choice={el.choose} selection={el} choices={choices} setChoices={setChoices} />)}
                <div className="mb-3"><b>Proficiencies:</b>
                    {Array.isArray(choices.proficiencies0) ? choices.proficiencies0.map(el => <div>{el}</div>) : <div>{choices.proficiencies0}</div>}
                    {Array.isArray(choices.proficiencies1) ? choices.proficiencies1.map(el => <div>{el}</div>) : <div>{choices.proficiencies1}</div>}
                    {Array.isArray(choices.proficiencies2) ? choices.proficiencies2.map(el => <div>{el}</div>) : <div>{choices.proficiencies2}</div>}
                    {Array.isArray(choices.proficiencies3) ? choices.proficiencies3.map(el => <div>{el}</div>) : <div>{choices.proficiencies3}</div>}
                </div>
            </div>
            <div className="col-4">
                {/* {sclass.name} */}
                <div className="mb-3"><b>Hit-die:</b>
                    <div>{sclass && sclass.hit_die}</div>
                </div>

                <div className="mb-3"><b>Saving throws:</b>
                    {sclass.saving_throws && sclass.saving_throws.map((el, i) =>
                        <div key={i}>{el.name}</div>)}
                </div>
                <div className="mb-3 text"><b>Class-Proficiencies</b>
                    {sclass.proficiencies && sclass.proficiencies.map((el, i) =>
                        <div key={i}>{el.name}</div>)}
                </div>
            </div>
        </Row>
    )
}

export default SpecificClass
