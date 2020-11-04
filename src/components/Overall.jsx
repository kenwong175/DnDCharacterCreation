import React from 'react'
import { Button, Row } from 'react-bootstrap';

function Overall({overall}) {
    let srace = overall.srace;
    let sclass = overall.sclass;
    let score = overall.tempScore;
    let rChoices = overall.rChoices;
    let cChoices = overall.cChoices;
    return (
        <Row>
            <div className="col-4"></div>
            <div className="col-8">
            {/* From Race */}
            {srace.languages&&srace.languages.map((el,i)=>
            <div key={i}>{el.index}</div>)}
            {srace.starting_proficiencies&&srace.starting_proficiencies.map((el,i)=>
            <div key={i}>{el.index}</div>)}
            {srace.traits&&srace.traits.map((el,i)=>
            <div key={i}>{el.index}</div>)}
            <div>{srace.speed}</div>
            {Object.keys(rChoices).map(function(key,index){
                return(
                    <div key={index}>{key}:{rChoices[key]}</div>
                )
            })}
            {/* From Class */}
            {sclass&&<div>{sclass.hit_die}</div>}
            {sclass.saving_throws&&sclass.saving_throws.map((el,i)=>
            <div key={i}>{el.name}</div>)}
            {sclass.proficiencies&&sclass.proficiencies.map((el,i)=>
            <div key={i}>{el.name}</div>)}
            {Object.keys(cChoices).map(function(key,index){
                return(
                    <div key={index}>{key}:{cChoices[key]}</div>
                )
            })}
            {/* From Ability Score */}
            {Object.keys(score).map(function(key,index){
                if(key==="prof_bonus"||key==="arr"){
                    return;
                } else{
                    return <div key={index}>{key}:{score[key]}</div>
                }
            })}
            </div>
            <div className="col-12">
            <Button variant="success">Save&Confirm</Button>{' '}
            </div>
        </Row>
    )
}

export default Overall
