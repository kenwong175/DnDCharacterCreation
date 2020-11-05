import axios from "axios";
import {DB,DC,DBa,DD,DF,DM,DP,DR,DRg,DS,DW,DWiz, D, Dw, E, G, HE, HO, Ha, H, T} from "./images.js"
import {DwB,DwC,DwBa,DwD,DwF,DwM,DwP,DwR,DwRg,DwS,DwW,DwWiz} from "./images.js"
import {EB,EC,EBa,ED,EF,EM,EP,ER,ERg,ES,EW,EWiz} from "./images.js"
import {GB,GC,GBa,GD,GF,GM,GP,GR,GRg,GS,GW,GWiz} from "./images.js"
import {HEB,HEC,HEBa,HED,HEF,HEM,HEP,HER,HERg,HES,HEW,HEWiz} from "./images.js"
import {HOB,HOC,HOBa,HOD,HOF,HOM,HOP,HOR,HORg,HOS,HOW,HOWiz} from "./images.js"
import {HaB,HaC,HaBa,HaD,HaF,HaM,HaP,HaR,HaRg,HaS,HaW,HaWiz} from "./images.js"
import {HB,HC,HBa,HD,HF,HM,HP,HR,HRg,HS,HW,HWiz} from "./images.js"
import {TB,TC,TBa,TD,TF,TM,TP,TR,TRg,TS,TW,TWiz} from "./images.js"
import firebase from "./firebase";
const db = firebase.firestore();

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

export async function getSpecificClass(classes,cb, scb, race){
    scb({});
    await axios.get(`${url}${classes.url}`)
    .then(res=>{
        console.log(race);
        //to get specific race
        let tempData = res.data;
        let pic;
        if(race.name==="Dragonborn"){
            switch(res.data.name){
                case "Barbarian":
                    pic = DB;
                    break;
                case "Bard":
                    pic = DBa;
                    break;
                case "Cleric":
                    pic = DC;
                    break;
                case "Druid":
                    pic = DD;
                    break;
                case "Fighter":
                    pic = DF;
                    break;
                case "Monk":
                    pic = DM;
                    break;
                case "Paladin":
                    pic = DP;
                    break;
                case "Ranger":
                    pic = DR;
                    break;
                case "Rogue":
                    pic = DRg;
                    break;
                case "Sorcerer":
                    pic = DS;
                    break;
                case "Warlock":
                    pic = DW;
                    break;
                case "Wizard":
                    pic = DWiz;
                    break;
            }
        } else if(race.name==="Dwarf"){
            switch(res.data.name){
                case "Barbarian":
                    pic = DwB;
                    break;
                case "Bard":
                    pic = DwBa;
                    break;
                case "Cleric":
                    pic = DwC;
                    break;
                case "Druid":
                    pic = DwD;
                    break;
                case "Fighter":
                    pic = DwF;
                    break;
                case "Monk":
                    pic = DwM;
                    break;
                case "Paladin":
                    pic = DwP;
                    break;
                case "Ranger":
                    pic = DwR;
                    break;
                case "Rogue":
                    pic = DwRg;
                    break;
                case "Sorcerer":
                    pic = DwS;
                    break;
                case "Warlock":
                    pic = DwW;
                    break;
                case "Wizard":
                    pic = DwWiz;
            }
        } else if(race.name==="Elf"){
            switch(res.data.name){
                case "Barbarian":
                    pic = EB;
                    break;
                case "Bard":
                    pic = EBa;
                    break;
                case "Cleric":
                    pic = EC;
                    break;
                case "Druid":
                    pic = ED;
                    break;
                case "Fighter":
                    pic = EF;
                    break;
                case "Monk":
                    pic = EM;
                    break;
                case "Paladin":
                    pic = EP;
                    break;
                case "Ranger":
                    pic = ER;
                    break;
                case "Rogue":
                    pic = ERg;
                    break;
                case "Sorcerer":
                    pic = ES;
                    break;
                case "Warlock":
                    pic = EW;
                    break;
                case "Wizard":
                    pic = EWiz;
            }
        } else if(race.name==="Gnome"){
            switch(res.data.name){
                case "Barbarian":
                    pic = GB;
                    break;
                case "Bard":
                    pic = GBa;
                    break;
                case "Cleric":
                    pic = GC;
                    break;
                case "Druid":
                    pic = GD;
                    break;
                case "Fighter":
                    pic = GF;
                    break;
                case "Monk":
                    pic = GM;
                    break;
                case "Paladin":
                    pic = GP;
                    break;
                case "Ranger":
                    pic = GR;
                    break;
                case "Rogue":
                    pic = GRg;
                    break;
                case "Sorcerer":
                    pic = GS;
                    break;
                case "Warlock":
                    pic = GW;
                    break;
                case "Wizard":
                    pic = GWiz;
            }
        } else if(race.name==="Half-Elf"){
            switch(res.data.name){
                case "Barbarian":
                    pic = HEB;
                    break;
                case "Bard":
                    pic = HEBa;
                    break;
                case "Cleric":
                    pic = HEC;
                    break;
                case "Druid":
                    pic = HED;
                    break;
                case "Fighter":
                    pic = HEF;
                    break;
                case "Monk":
                    pic = HEM;
                    break;
                case "Paladin":
                    pic = HEP;
                    break;
                case "Ranger":
                    pic = HER;
                    break;
                case "Rogue":
                    pic = HERg;
                    break;
                case "Sorcerer":
                    pic = HES;
                    break;
                case "Warlock":
                    pic = HEW;
                    break;
                case "Wizard":
                    pic = HEWiz;
            }
        } else if(race.name==="Half-Orc"){
            switch(res.data.name){
                case "Barbarian":
                    pic = HOB;
                    break;
                case "Bard":
                    pic = HOBa;
                    break;
                case "Cleric":
                    pic = HOC;
                    break;
                case "Druid":
                    pic = HOD;
                    break;
                case "Fighter":
                    pic = HOF;
                    break;
                case "Monk":
                    pic = HOM;
                    break;
                case "Paladin":
                    pic = HOP;
                    break;
                case "Ranger":
                    pic = HOR;
                    break;
                case "Rogue":
                    pic = HORg;
                    break;
                case "Sorcerer":
                    pic = HOS;
                    break;
                case "Warlock":
                    pic = HOW;
                    break;
                case "Wizard":
                    pic = HOWiz;
            }
        } else if(race.name==="Halfling"){
            switch(res.data.name){
                case "Barbarian":
                    pic = HaB;
                    break;
                case "Bard":
                    pic = HaBa;
                    break;
                case "Cleric":
                    pic = HaC;
                    break;
                case "Druid":
                    pic = HaD;
                    break;
                case "Fighter":
                    pic = HaF;
                    break;
                case "Monk":
                    pic = HaM;
                    break;
                case "Paladin":
                    pic = HaP;
                    break;
                case "Ranger":
                    pic = HaR;
                    break;
                case "Rogue":
                    pic = HaRg;
                    break;
                case "Sorcerer":
                    pic = HaS;
                    break;
                case "Warlock":
                    pic = HaW;
                    break;
                case "Wizard":
                    pic = HaWiz;
            }
        } else if(race.name==="Tiefling"){
            switch(res.data.name){
                case "Barbarian":
                    pic = TB;
                    break;
                case "Bard":
                    pic = TBa;
                    break;
                case "Cleric":
                    pic = TC;
                    break;
                case "Druid":
                    pic = TD;
                    break;
                case "Fighter":
                    pic = TF;
                    break;
                case "Monk":
                    pic = TM;
                    break;
                case "Paladin":
                    pic = TP;
                    break;
                case "Ranger":
                    pic = TR;
                    break;
                case "Rogue":
                    pic = TRg;
                    break;
                case "Sorcerer":
                    pic = TS;
                    break;
                case "Warlock":
                    pic = TW;
                    break;
                case "Wizard":
                    pic = TWiz;
            }
        } else if(race.name==="Human"){
            switch(res.data.name){
                case "Barbarian":
                    pic = HB;
                    break;
                case "Bard":
                    pic = HBa;
                    break;
                case "Cleric":
                    pic = HC;
                    break;
                case "Druid":
                    pic = HD;
                    break;
                case "Fighter":
                    pic = HF;
                    break;
                case "Monk":
                    pic = HM;
                    break;
                case "Paladin":
                    pic = HP;
                    break;
                case "Ranger":
                    pic = HR;
                    break;
                case "Rogue":
                    pic = HRg;
                    break;
                case "Sorcerer":
                    pic = HS;
                    break;
                case "Warlock":
                    pic = HW;
                    break;
                case "Wizard":
                    pic = HWiz;
            }
        }
    console.log(tempData);
    tempData = {...tempData, pic};    
    cb(tempData);
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
        let tempData = res.data;
        let pic;
            switch(res.data.name){
                case "Dragonborn":
                    pic = D;
                    break;
                case "Dwarf":
                    pic = Dw;
                    break;
                case "Elf":
                    pic = E;
                    break;
                case "Gnome":
                    pic = G;
                    break;
                case "Half-Elf":
                    pic = HE;
                    break;
                case "Half-Orc":
                    pic = HO;
                    break;
                case "Halfling":
                    pic = Ha;
                    break;
                case "Human":
                    pic = H;
                    break;
                case "Tiefling":
                    pic = T;
                    break;
        }
        tempData = {...tempData, pic};    
        cb(tempData);
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

export function setAll(doc, cb, srace, sclass, score, rChoices, cChoices){
    let tempScore = {...score};
    srace.ability_bonuses.map(el =>{
        if(tempScore.hasOwnProperty(el.ability_score.name)){
            tempScore[el.ability_score.name] += el.bonus
        }
        return tempScore;
    })
    cb({doc,srace,sclass,tempScore,rChoices,cChoices});
}

export async function saveData(overall){
    db.collection("characters").add({overall})
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

