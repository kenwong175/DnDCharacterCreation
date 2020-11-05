import React from 'react'
import { Button, Image, Row } from 'react-bootstrap';

function Overall({overall}) {
    let srace = overall.srace;
    let sclass = overall.sclass;
    let score = overall.tempScore;
    let rChoices = overall.rChoices;
    let cChoices = overall.cChoices;
    return (
        <Row>
            <div className="col-4">
                <Image src={sclass.pic} />
            </div>
            <div className="col-2">
            {/* From Ability Score */}
            <h3>Ability Score</h3>
            {Object.keys(score).map(function(key,index){
                if(key==="prof_bonus"||key==="arr"){
                    return;
                } else{
                    return  <Row>
                            <div className="col-3 mb-3" key={index}><b>{key}</b></div>
                            <div className="col-2">:</div>
                            <div className="col-3 text-left">{score[key]}</div>
                            </Row>
                }
            })}
            </div>
            <div className="col-3">
            {/* From Race */}
            <h3>{srace.name}</h3>
            <div className="mb-3 text"><b>Languages:</b>
            {srace.languages&&srace.languages.map((el,i)=>
            <div key={i}>{el.index}</div>)}
            </div>
            <div className="mb-3 text"><b>Starting Proficiencies:</b>
            {srace.starting_proficiencies.length!==0?srace.starting_proficiencies.map((el,i)=>
            <div key={i}>{el.index}</div>):<div>{"N/A"}</div>}
            </div>
            <div className="mb-3 text"><b>Traits:</b>
            {srace.traits&&srace.traits.map((el,i)=>
            <div key={i}>{el.index}</div>)}
            </div>
            <div className="mb-3"><b>Speed:</b>
            <div>{srace.speed}</div>
            </div>
            <div className="mb-3"><b>Proficiencies:</b>
                    {rChoices.proficiencies0 && rChoices.proficiencies0.map(el => <div>{el}</div>)}
                    {rChoices.proficiencies1 && rChoices.proficiencies1.map(el => <div>{el}</div>)}
                    {rChoices.proficiencies2 && rChoices.proficiencies2.map(el => <div>{el}</div>)}
                    {rChoices.proficiencies3 && rChoices.proficiencies3.map(el => <div>{el}</div>)}
                </div>
                <div className="mb-3"><b>Trait:</b>
                    <div>{rChoices.trait1 ? rChoices.trait1 : "N/A"}</div>
                </div>
                <div className="mb-3"><b>Language:</b>
                    <div>{rChoices.languages1 ? rChoices.languages1 : "N/A"}</div>
                </div>
            </div>
            <div className="col-3">
            {/* From Class */}
            <h3>{sclass.name}</h3>
            <div className="mb-3"><b>Hit-Die:</b>
            {sclass&&<div>{sclass.hit_die}</div>}
            </div>
            <div className="mb-3"><b>Saving Throws:</b>
            {sclass.saving_throws&&sclass.saving_throws.map((el,i)=>
            <div key={i}>{el.name}</div>)}
            </div>
            <div className="mb-3"><b>Class Proficiencies:</b>
            {sclass.proficiencies&&sclass.proficiencies.map((el,i)=>
            <div key={i}>{el.name}</div>)}
            </div>
            <div className="mb-3"><b>Proficiencies:</b>
                    {Array.isArray(cChoices.proficiencies0) ? cChoices.proficiencies0.map(el => <div>{el}</div>) : <div>{cChoices.proficiencies0}</div>}
                    {Array.isArray(cChoices.proficiencies1) ? cChoices.proficiencies1.map(el => <div>{el}</div>) : <div>{cChoices.proficiencies1}</div>}
                    {Array.isArray(cChoices.proficiencies2) ? cChoices.proficiencies2.map(el => <div>{el}</div>) : <div>{cChoices.proficiencies2}</div>}
                    {Array.isArray(cChoices.proficiencies3) ? cChoices.proficiencies3.map(el => <div>{el}</div>) : <div>{cChoices.proficiencies3}</div>}
                </div>
            </div>
            <div className="col-12">
            <Button variant="success">Save&Confirm</Button>{' '}
            </div>
        </Row>
    )
}

export default Overall
