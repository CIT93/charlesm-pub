const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];


function dHSp(houseSize) {
  let houseSizepoints = 0;
  
  if (houseSize === "small") {
    houseSizepoints = 4;
  } else if(houseSize === "large") {
    houseSizepoints = 10;
  } else if (houseSize === "medium") {
    houseSizepoints = 7;
  } else if (houseSize === "aPt") {
    houseSizepoints = 2;

  } 
  
  return houseSizepoints;

}

function dHp(numberInHousehold) {
    let householdPoints = 0;
  if (numberInHousehold === 1) {
    householdPoints = 14;
  } else if (numberInHousehold === 2) {
    householdPoints = 12;
  } else if (numberInHousehold === 3) {
    householdPoints= 10;
  } else if (numberInHousehold === 4) {
    householdPoints = 8;
  } else if (numberInHousehold === 5) {
    householdPoints = 6;
  } else if (numberInHousehold === 6) {
    householdPoints = 4;
  } else if (numberInHousehold > 6) {
    householdPoints = 2;
  }
  return householdPoints;

  }
  

function displayOutObj() {
  for(obj of cfpData){
  console.log(obj);
      const output = document.getElementById("output");
      const newH2 = document.createElement("h2");
      newH2.textContent = `The total carbon footprint is ${obj.cfpTotal}. The score is determined by the number of household members, ${obj.houseM}, and house size, ${obj.houseS}. The number of household points scored are ${obj.houseMPTS}, and house size points are ${obj.houseSPTS}. `;
      output.appendChild(newH2);}
}

  function start(houseHoldmembers, houseSize) {
    const householdPTS = dHp(houseHoldmembers);
    const houseSizepoints = dHSp(houseSize);
    const total = householdPTS + houseSizepoints;
  
    cfpData.push({
      houseM: houseHoldmembers,
      houseS: houseSize,
      houseMPTS: householdPTS,
      houseSPTS: houseSizepoints, 
      cfpTotal: total});
    
    
 }

function displayOutput(){
    
  for(obj of cfpData) {
    console.log(obj)
    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon Footprint is ${obj.cfpTotal}`;
    OUTPUT.appendChild(newH2);

  }


}
FORM.addEventListener(`submit`, function(e){
  e.preventDefault();
  
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
  start(houseMembers, houseSize);
  OUTPUT.innerHTML = "";
  displayOutObj(cfpData);

  FORM.reset();
})


//is the apt score correct? no it is not. it is two points off.Had to correct to aPt like in line 15.
//why are we doing all this work in the form to make sure the user gives us good data? must assume users are not giving good data