import React from 'react'
import { Button, Card, CardGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { clearDoc, deleteChar, loadOne } from '../util/functions';

function Characters({char, setRace, setClass, setScore, setRChoice, setCChoice, setDoc}) {
    return (
    <div>
    <CardGroup>
        {char.map(el=>(
            <Card className="text-center">
                <Card.Img variant="top" src={el.pic} />
                <Card.Body>
                    <Card.Title>{el.race}</Card.Title>
                    <Card.Text>
                        {el.class}
                    </Card.Text>
                </Card.Body>
                <Button onClick={()=>loadOne(el.id,setRace,setClass,setRChoice,setCChoice,setScore,setDoc)}className="mx-5 mb-1">Load</Button>
                <Button onClick={()=>deleteChar(el.id)} variant="danger" className="mx-5 mb-1">Delete</Button>
            </Card>
            
        ))}
    </CardGroup>
    <div className="text-center btn btn-block m-4">
    <Link className="create text-white p-3 rounded" to="/race" onClick={()=>clearDoc(setDoc)}>Create New Character</Link>
    </div>
    </div>
    )
}

export default Characters
