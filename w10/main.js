import { renderTbl } from "./render.js";
import { dHSp, dHp } from "./carbFoot.js";
import {FORM, FNAME, LNAME, SUBMIT} from "./global.js";
import {saveLS, cfpData} from "./storage.js";

const start = (houseHoldmembers, houseSize, firstName, lastName) => {
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
  const validateField = event => {
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

   
    FNAME.addEventListener('blur', validateField);
    LNAME.addEventListener('blur', validateField);

    


FORM.addEventListener('submit', e => {
  e.preventDefault();
  
  const firstNameIsValid = FNAME.value !=='';
  const lastNameIsValid = LNAME.value !=='';
  if (FNAME.value !=='' && LNAME.value !=='') {
  SUBMIT.textContent = '';
    start(parseInt(FORM.housem.value), FORM.houses.value, FNAME.value, LNAME.value);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form requires first name and last name";
  } 
});


//rest operator
// const add2 = function(...a){
//   return 2 + a[3];
// }

// const result = add2(1,2,3,4);


//arrow function

const add2 = a => 2 + a;


const result = add2(100);

//IIFE


const a = 3;

(function(a) {
  console.log("inside IIFE");
  console.log(a);
})(a);
