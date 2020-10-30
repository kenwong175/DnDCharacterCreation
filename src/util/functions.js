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

export async function getSpecificClass(classes,cb){
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

export async function getSpecificRace(race,cb){
    await axios.get(`${url}${race.url}`)
    .then(res=>{
        //to get list of races
        cb(res.data);
    }).catch(err=>{
        console.log(err);
    })
}