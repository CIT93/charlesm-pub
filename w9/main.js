import { renderTbl } from "./render.js";
import { dHSp, dHp } from "./carbFoot.js";
import {FORM} from "./global.js";
import {saveLS, cfpData} from "./storage.js";



function start(houseHoldmembers, houseSize, firstName, lastName) {
    const householdPTS = dHp(houseHoldmembers);
    const houseSizepoints = dHSp(houseSize);
    const total = householdPTS + houseSizepoints;
  
    cfpData.push({
      firstn: firstName,
      lastn: lastName,
      houseM: houseHoldmembers,
      houseS: houseSize,
      houseMPTS: householdPTS,
      houseSPTS: houseSizepoints, 
      cfpTotal: total});
    
      
 }


 renderTbl(cfpData);
 
FORM.addEventListener(`submit`, function(e){
  e.preventDefault();
  
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
  start(houseMembers, houseSize, firstName, lastName);
  saveLS(cfpData);
  
  renderTbl(cfpData);
  
  FORM.reset();
})


