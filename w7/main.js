import { renderTbl } from "./render.js";

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
  



  function start(houseHoldmembers, houseSize, firstName, lastName) {
    const householdPTS = dHp(houseHoldmembers);
    const houseSizepoints = dHSp(houseSize);
    const total = householdPTS + houseSizepoints;
  
    cfpData.push({
      houseM: houseHoldmembers,
      houseS: houseSize,
      houseMPTS: householdPTS,
      houseSPTS: houseSizepoints, 
      firstn: firstName,
      lastn: lastName,
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



//function createTable(data) {
  //const table = document.createElement("table");
  //const thead = createTableHeader();
  //table.appendChild(thead);
  //return table;
//}

//function createTableHeader() {
  //const thead = document.createElement("thead");
  //const tr = document.createElement("tr");
  //const headingTextArr = ["Name", "HouseHold", "HouseSize", "Footprint", "Actions"];
  //headingTextArr.forEach(function (text) {
      //const th = document.createElement("th");
      //th.textContent = text;
      //tr.appendChild(th);
  //});
  //thead.appendChild(tr);
  //return thead;
//}

//function renderTable(data, container) {
  //const table = createTable(data);
  //container.appendChild(table);
//}

// Usage
//renderTable(data, TBL); 
// Assuming TBL is the container element
// for the coding challenge, i used chatgpt for help in hopes I can see and understand why this way of coding works.I feel I am starting to see but just can't put my finger on it. 
//actually the more i look at it, i understand it a little more. I feel with more practice and exposure I will get it more. 


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


// as far as modules, I have no questions. I read about them from the link provided and also on chatgpt.
// reason for no questions because I am not sure what to ask yet. (week 7 pri)

// as far as the error code reguarding reference, we were seeingthat error messsage because the const TBL was still in the main.js. 
//(continued) since we moved everything that was relevant to TBL to render.js we needed to move const TBL with it because we ran, it will think TBL is not defined. 