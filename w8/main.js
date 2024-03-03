import { renderTbl } from "./render.js";
import { dHSp, dHp } from "./carbFoot.js";


const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

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

FORM.addEventListener(`submit`, function(e){
  e.preventDefault();
  
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
  start(houseMembers, houseSize, firstName, lastName);
  OUTPUT.innerHTML = "";
  //displayOutObj(cfpData);
  renderTbl(cfpData);
  
  FORM.reset();
})


