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
      console.log(arr)
      const output = document.getElementById("output");
      const newP = document.createElement("p");
      newP.textContent = `Carbon footprint total is ${arr[4]}, ${arr[1]}, ${arr[2]} is the score from the number of people in the home, ${arr[3]} the score from the size of the home`;
      output.appendChild(newP);
    }
  }

start(5, "small")
start(4, "large")
start(3, "medium")


displayOutput ()

// go back to 7:00 and 11:25 on video to help figure out html issue
// update template string to reference data memebers of house or size of house
// i think problem starts on line 53