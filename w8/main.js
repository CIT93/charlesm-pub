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
  if (housem.value && houses.value === 0) {
    renderTbl.push
  }

// After wacthing the video for option 2, I attempted to try an if statement. I even commented the requrired parts for the house member number and house size on the index.html. 
// I feel i am on the right track on the first half of the if statement but I am having more doubts on the renderTbl.push. did not get working code. 

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


