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
        //to get list of races
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
    console.log(selection.target.className+index);
    console.log(choices);
    console.log(number);
    let name = selection.target.className+index;
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