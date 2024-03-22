class FP {
    constructor(first, last, houseMembers, houseSize, dietChoice){
        this.first = first;
        this.last = last;
        this.houseMembers = houseMembers;
        this.houseSize = houseSize;
        this.dietChoice = dietChoice;
        this.householdPoints();
        this.houseSizepoints();
        this.dietChoicePoints();
        this.total();
    }
    householdPoints(){
        if (this.houseMembers === 1) {
            this.householdPoints = 14;
          } else if (this.houseMembers === 2) {
            this.householdPoints = 12;
          } else if (this.houseMembers === 3) {
            this.householdPoints= 10;
          } else if (this.houseMembers === 4) {
            this.householdPoints = 8;
          } else if (this.houseMembers === 5) {
            this.householdPoints = 6;
          } else if (this.houseMembers === 6) {
            this.householdPoints = 4;
          } else if (this.houseMembers > 6) {
            this.householdPoints = 2;
          }
    }
    houseSizepoints(){
        if (this.houseSize === "small") {
        this.houseSizepoints = 4;
      } else if(this.houseSize === "large") {
        this.houseSizepoints = 10;
      } else if (this.houseSize === "medium") {
        this.houseSizepoints = 7;
      } else if (this.houseSize === "aPt") {
        this.houseSizepoints = 2;
    
      } 

      





//       If you eat domestic meat on a daily basis, then add 10 points.
// If you eat domestic meat a few times per week, then add 8 points.
// If you are a vegetarian, then add 4 points.
// If you are a vegan or only eat wild meat, then add 2 points.
// You would also add 12 points if most of the food you eat is prepackaged convenience food, such as frozen pizza, cereal, and potato chips. If you have a good balance of fresh and convenience food, then just add 6 points. If you only eat fresh, locally grown, or hunted food, then add 2 points.




}
dietChoicePoints (){
  if(this.dietChoice === "domMeatDaily"){
    this.dietPoints = 10;
  }
  else if(this.dietChoice === "meatFewtimes"){
    this.dietPoints = 8;
  } 
  else if (this.dietChoice === "vegetarian"){
    this.dietPoints = 4;
  }
  else if(this.dietChoice === "vegWildmeat"){
    this.dietPoints= 2;
  }
  else if (this.dietChoice === "unhealthy"){
    this.dietPoints = 12;
  }
  else if (this.dietChoice === "partialHealthy"){
    this.dietPoints = 6;
  }
  else if (this.dietChoice === "Natural"){
    this.dietPoints = 2;
  }

  
      
    }
    












total() {
  this.total = this.householdPoints + this.houseSizepoints + this.dietPoints;
}}
export {FP};

// I am not sure on what to do. I replayed the part of the video tht described the challenge
// (continued) but I cannot think of anything