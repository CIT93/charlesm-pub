class FP {
    constructor(first, last, houseMembers, houseSize, dietChoice, foodSource, WaterConsume){
        this.first = first;
        this.last = last;
        this.houseMembers = houseMembers;
        this.houseSize = houseSize;
        this.dietChoice = dietChoice;
        this.foodSource = foodSource;
        this.WaterConsumePoints = WaterConsume;
        this.calhouseholdPoints();
        this.calhouseSizepoints();
        this.caldietChoicePoints();
        this.calfoodSourcePoints();
        // this.calWaterConsumePoints();
        this.caltotal();
    }
    calhouseholdPoints(){
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
    calhouseSizepoints(){
        if (this.houseSize === "small") {
        this.houseSizepoints = 4;
      } else if(this.houseSize === "large") {
        this.houseSizepoints = 10;
      } else if (this.houseSize === "medium") {
        this.houseSizepoints = 7;
      } else if (this.houseSize === "aPt") {
        this.houseSizepoints = 2;
    
      } 



}
caldietChoicePoints (){
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
    
  calfoodSourcePoints(){
    if(this.foodSource === "packed"){
      this.foodPoints = 12;
    }
    else if(this.foodSource === "balanced"){
      this.foodPoints = 6;
    }
    else if(this.foodSource === "local"){
      this.foodPoints = 2;
    }
  }
// multWaterConsumePoints(){
//   let numAppliance = 0;
//   if(numAppliance === 0){
    
//   }
//   //i feel this how i would start off. 
// }


// calWaterConsumePoints(){
//   if(this.WaterConsume > 9){
//     this.WaterPoints = 3;
//   }
//   else if(this.WaterConsume > 4){
//     this.WaterPoints === 2;
//   }
//   else if(this.WaterConsume > 1){
//     this.WaterPoints === 1;
//   }

// i feel right here I would pass in a function that defines the amount of appliances and tell it to double the points if needed.
//not entirely sure how to do this. 

  












caltotal() {

  this.total = this.householdPoints + this.houseSizepoints + this.dietPoints + this.foodPoints + this.WaterConsumePoints;
  }
}
export {FP};

