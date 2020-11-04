import React from 'react'
import { Image, Row } from 'react-bootstrap';
import Choices from './Choices';
import {DB, DBa} from "../util/images"

function SpecificClass({sclass, setChoices, choices, setMyChoice}) {
    console.log(sclass);
    return (
        <Row>
            <div className="col-4">
                <Image src={DB}/>
                {/* <Image src={DBa}/> */}
            </div>
            <div className="col-4">
                {sclass.proficiency_choices && sclass.proficiency_choices.map((el, i) =>
                    <Choices setMyChoice={setMyChoice} key={i} index={i} choice={el.choose} selection={el} choices={choices} setChoices={setChoices} />)}
            </div>
            <div className="col-4">
                {/* class name */}
                {/* {sclass.name} */}
                {sclass && <div>{sclass.hit_die}</div>}
                {sclass.saving_throws && sclass.saving_throws.map((el, i) =>
                    <div key={i}>{el.name}</div>)}
                {sclass.proficiencies && sclass.proficiencies.map((el, i) =>
                    <div key={i}>{el.name}</div>)}
            </div>
        </Row>
    )
}

export default SpecificClass
