class FP {
    constructor(first, last, houseMembers, houseSize, dietChoice, foodSource, waterValue, WaterConsume, both, PurchPoints){
        this.first = first;
        this.last = last;
        this.houseMembers = houseMembers;
        this.houseSize = houseSize;
        this.dietChoice = dietChoice;
        this.foodSource = foodSource;
        this.waterValue = waterValue
        this.WaterConsumePoints = WaterConsume;
        this.both = both;
        this.housePurch = PurchPoints;
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



  
  

caltotal(){

  this.total = this.householdPoints + this.houseSizepoints + this.dietPoints + this.foodPoints + this.WaterConsumePoints + this.PurchPoints;

}
}
export {FP};

