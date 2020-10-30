import axios from "axios";

let url = "https://www.dnd5eapi.co"

export async function getClass(){
    await axios.get(`${url}/api/classes/`)
    .then(res=>{
        //to get list of classes
        console.log(res);
        //to get specific classes
        axios.get(`${url}${res.data.results[0].url}`)
        .then(res=>{
            console.log(res);
        })
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

export async function getSpecificRace(race,cb){
    await axios.get(`${url}${race.url}`)
    .then(res=>{
        //to get list of races
        cb(res.data);
    }).catch(err=>{
        console.log(err);
    })
}