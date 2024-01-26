function dHp(numberInHousehold) {
    console.log("Inside the Function");
  if (numberInHousehold === 1) {
    carbonFootprintPoints = carbonFootprintPoints + 14;
  } else if (numberInHousehold === 2) {
    carbonFootprintPoints = carbonFootprintPoints + 12;
  } else if (numberInHousehold === 3) {
    carbonFootprintPoints = carbonFootprintPoints + 10;
  } else if (numberInHousehold === 4) {
    carbonFootprintPoints = carbonFootprintPoints + 8;
  } else if (numberInHousehold === 5) {
    carbonFootprintPoints = carbonFootprintPoints + 6;
  } else if (numberInHousehold === 6) {
    carbonFootprintPoints = carbonFootprintPoints + 4;
  } else if (numberInHousehold > 6) {
    carbonFootprintPoints = carbonFootprintPoints + 2;
  }
  console.log(`Based on the number of members in the household of ${numberInHousehold} the points would be ${carbonFootprintPoints}.`);
  }
  let carbonFootprintPoints = 0;
  // const numberInHousehold = 3;
  
  
  // global scope

  dHp(3);
  dHp(4);


const houseSize = "small";
console.log(carbonFootprintPoints);
  
  if (houseSize === "small") {
    carbonFootprintPoints = carbonFootprintPoints + 4;
  } else if(houseSize === "large") {
    carbonFootprintPoints = carbonFootprintPoints + 10;
  } else if (houseSize === "medium") {
    carbonFootprintPoints = carbonFootprintPoints + 7;
  } else if (houseSize === "aPt") {
    carbonFootprintPoints = carbonFootprintPoints + 2;
  }
  console.log(`Based on the size of the home of ${houseSize} the points would be ${carbonFootprintPoints}`)
  