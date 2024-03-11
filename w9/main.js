import { renderTbl } from "./render.js";
import { dHSp, dHp } from "./carbFoot.js";
import {FORM} from "./global.js";
import {saveLS, cfpData} from "./storage.js";

const firstNameEl = document.getElementById('firstName');
const lastNameEl = document.getElementById('lastName');
const submitEl = document.getElementById("submitError");

// const FORM = document.getElementById("form");
// const OUTPUT = document.getElementById("output");
// const cfpData = [];

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

 // Function to validate a single field
 function validateField(event) {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);

  if (field === '') {
      fieldError.textContent = `${fieldId} is required`;
      event.target.classList.add('invalid');
  } else {
      fieldError.textContent = '';
      event.target.classList.remove('invalid');
  }
}
   // Attach blur event listeners

   
    firstNameEl.addEventListener('blur', validateField);
    lastNameEl.addEventListener('blur', validateField);

    


FORM.addEventListener('submit', function(e){
  e.preventDefault();
  
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const firstNameIsValid = firstNameEl.value !=='';
  const lastNameIsValid = lastNameEl.value !=='';
  if (firstNameIsValid && lastNameIsValid) {
    submitEl.textContent = '';
    const houseMembers = parseInt(FORM.housem.value);
    const houseSize = FORM.houses.value;
    start(houseMembers, houseSize, firstName, lastName);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    submitEl.textContent = "Form requires first name and last name";
  } 
});


