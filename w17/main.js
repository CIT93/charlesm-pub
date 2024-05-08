import { renderTbl } from "./render.js";

import {FORM, FNAME, LNAME, SUBMIT, WATER, BOTH} from "./global.js";
import {saveLS, cfpData} from "./storage.js";
import { FP } from "./fp.js";
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

  const determineRecycleItems = e => {
    const numberChecked = document.querySelectorAll('.recycle:checked').length;
    return {
      glass: e.target.glass.checked,
      plastic: e.target.plastic.checked,
      paper: e.target.paper.checked,
      aluminum: e.target.aluminum.checked,
      steel: e.target.steel.checked,
      food: e.target.food.checked,
      recyclePoints: (24-(numberChecked * 4))
    }

  }

FORM.addEventListener('submit', e => {
  e.preventDefault();
  
  if (FNAME.value !=='' && LNAME.value !=='') {
    SUBMIT.textContent = '';
    const fpObj = new FP(FNAME.value, 
      LNAME.value, 
      parseInt(e.target.housem.value), 
      e.target.houses.value, 
      e.target.diet.value, 
      e.target.foodSource.value, 
      e.target.water.value, 
      e.target.appliance.checked ? parseInt(e.target.water.value) * 2 : parseInt(e.target.water.value), 
      e.target.appliance.checked, 
      parseInt(e.target.houseHoldPurch.value), 
      e.target.WasteProduction.value,
      determineRecycleItems(e),
      e.target.perVehUse.value,
      e.target.pubTranUse,
      e.target.flights.value
      );
    cfpData.push(fpObj);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
    BOTH.disabled = false;
  } else {
    SUBMIT.textContent = "Form requires first name and last name";
  } 
});

WATER.addEventListener("change", e => {
  
 if(parseInt(WATER.value) === 0){
    BOTH.disabled = true;
 } else {
  BOTH.disabled = false
 }
})


// i finally got the code to mostly work but i am not getting any points displayed.