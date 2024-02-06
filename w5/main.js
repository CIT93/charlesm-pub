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
  
  function start(houseHoldmembers, houseSize) {
    const householdPTS = dHp(houseHoldmembers);
    const houseSizepoints = dHSp(houseSize);
    const total = householdPTS + houseSizepoints;
    cfpData.push([houseHoldmembers, houseSize, householdPTS, houseSizepoints, total]);
    
  }

  function displayOutput() {
    for (arr of cfpData){
      const output = document.getElementById("output");
      const newH2 = document.createElement("h2");
      newH2.textContent = `Carbon Footprint ${arr[4]}`;
      const newH3 = document.createElement("h3");
      newH3.textContent = `Based on number in and size of home`;
      const newP = document.createElement("p");
      newP.textContent = `This number is based on the number of people in the house of ${arr[0]} (score: ${arr[3]},)`;
      newP.textContent += `and a ${arr[1]} size of home (score:${arr[2]},)`;
      output.appendChild(newH2);
      output.appendChild(newH3);
      output.appendChild(newP);
    }
  }

start(5, "small")
start(4, "large")
start(3, "medium")


displayOutput ()

