import axios from "axios";


let url = "https://www.dnd5eapi.co"

export async function getClass(cb){
    await axios.get(`${url}/api/classes/`)
    .then(res=>{
        //to get list of classes
        cb(res.data.results);
    }).catch(err=>{
        console.log(err);
    })
}

export async function getSpecificClass(classes,cb, scb){
    scb({});
    await axios.get(`${url}${classes.url}`)
    .then(res=>{
        //to get specific race
        cb(res.data);
    }).catch(err=>{
        console.log(err);
    })
}

export async function getRace(cb){
    await axios.get(`${url}/api/races/`)
    .then(res=>{
        //to get list of races
        cb(res.data.results);
    }).catch(err=>{
        console.log(err);
    })
}

export async function getSpecificRace(race,cb,scb){
    scb({});
    await axios.get(`${url}${race.url}`)
    .then(res=>{
        //to get list of races
        cb(res.data);
    }).catch(err=>{
        console.log(err);
    })
}

export function setChoices(selection, choices, number, index,cb){
    console.log(selection.target.textContent);
    console.log(selection.target.id+index);
    console.log(choices);
    console.log(number);
    let name = selection.target.id+index;
    let text = selection.target.textContent;
    if(name in choices){
        if(number>1){
            let tempChoices = {...choices};
            if(tempChoices[name].length>number-1){
                tempChoices[name].shift()
                tempChoices[name].push(text);
            } else {
                tempChoices[name].push(text);
            }
            cb(tempChoices);
        } else {
        let tempChoices = {...choices};
        tempChoices[name] = text;
        cb(tempChoices);
        }
    } else{
        if(number>1){
            let tempChoices = {...choices};
            tempChoices[name] = [text];
            cb(tempChoices);
        }else{
            cb({...choices,[name]:text});
        }
    };
}

export function selScore (id,el,state,cb){
    console.log(id);
    console.log(el);
    let tempState = {...state};
    if(tempState.hasOwnProperty(id)){
        let revNum = tempState[id];
        console.log(revNum);
        tempState.arr.push(revNum);
    }
    let index = tempState.arr.findIndex(num=>num===el);
    tempState.arr.splice(index,1);
    cb({...tempState, [id]:el});
    console.log(state);
}

export function resetScore(cb){
    cb({arr:[15,14,13,12,10,8]})
}

export function setAll(state, cb, srace, sclass, score, rChoices, cChoices){
    let tempScore = {...score};
    srace.ability_bonuses.map(el =>{
        if(tempScore.hasOwnProperty(el.ability_score.name)){
            tempScore[el.ability_score.name] += el.bonus
        }
        return tempScore;
    })
    cb({srace,sclass,tempScore,rChoices,cChoices});
}