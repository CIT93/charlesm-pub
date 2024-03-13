 const dHSp = (houseSize) => {
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
  
   const dHp = (numberInHousehold) => {
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

    export{dHSp,dHp};