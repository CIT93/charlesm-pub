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
  

function displayOutObj(obj) {
  console.log(obj);
      const output = document.getElementById("output");
      const newH2 = document.createElement("h2");
      newH2.textContent = `The total carbon footprint is ${obj.cfpTotal}. The score is determined by the number of household members, ${obj.houseM}, and house size, ${obj.houseS}. The number of household points scored are ${obj.houseMPTS}, and house size points are ${obj.houseSPTS}. `;
      output.appendChild(newH2);
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
    const output = document.getElementById("output");
    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon Footprint is ${obj.cfpTotal}`;
    output.appendChild(newH2);

  }


}

  //function displayOutput() {
   // for (let i = 0; i< cfpData.length; i++){
      //console.log(i);
      //const output = document.getElementById("output");
      //const newH2 = document.createElement("h2");
      //newH2.textContent = `Carbon Footprint ${cfpData[i][4]}`;
      //const newH3 = document.createElement("h3");
      //newH3.textContent = `Based on number in and size of home`;
      //const newP = document.createElement("p");
      //newP.textContent = `This number is based on the number of people in the house of ${arr[0]} (score: ${arr[3]}),`;
      //newP.textContent += `and a ${arr[1]} size of home (score:${arr[2]}).`;
      //output.appendChild(newH2);
      //output.appendChild(newH3);
      //output.appendChild(newP);
   // }
  //}

start(5, "small")
start(4, "large")
start(3, "medium")

displayOutObj(cfpData[0]);
displayOutObj(cfpData[1]);
displayOutObj(cfpData[2]);

console.log(cfpData);

// object coding challenge - refactor the start function to store the data in an object
//displayOutput();

// intro to  object
//const myArr = [];
//const myObj = {
  //cfpTotal: 18,  
  //houseSize: "small",
  //displayOut: function (){
    //console.log("this is a method call")
    //console.log(this.houseSize);
  //}
//};
//console.log(myObj.cfpTotal);
//console.log(myObj["houseSize"]);
//myObj.displayOut()



//for (let i = 0; i < 5; i ++){
//block scope
//console.log(1);
//}
// how would we modify this code to count from 1 to 15?
//for (let i = 1; i <= 15; i ++){
  //block scope
  //console.log(1);
  //}
  //count backwards
  //for (let i = 6; i > 0; i --){
    //block scope
    //console.log(1);
    //}

  //refactor for of loop above into standard for; i honestly am not sure how start the refactor. I gave the for portion a try at least. 