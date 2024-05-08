class FP {
    constructor(first, last, houseMembers, houseSize, dietChoice, foodSource, waterValue, WaterConsume, both, houseHoldPurch, WasteProd, recycle, personalVehicle, publicTransport, flights){
        this.first = first;
        this.last = last;
        this.houseMembers = houseMembers;
        this.houseSize = houseSize;
        this.dietChoice = dietChoice;
        this.foodSource = foodSource;
        this.waterValue = waterValue
        this.WaterConsumePoints = WaterConsume;
        this.both = both;
        this.PurchPoints = houseHoldPurch;
        this.WastePoints = WasteProd;
        this.recycle = recycle;
        this.vehiclePoints = personalVehicle;
        this.publicTransPoints = publicTransport;
        this.flightPoints = flights;
        this.calhouseholdPoints();
        this.calhouseSizepoints();
        this.caldietChoicePoints();
        this.calfoodSourcePoints();
        this.calWasteProdPoints();
        this.calPersVehUsePoints();
        this.calPubTransPoints();
        this.calFlightPoints();
 
      
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

calWasteProdPoints(){
  if(this.WasteProd === 4){
    this.WastePoints === 50;
  }
  else if(this.WasteProd === 3){
    this.WastePoints === 40;
  } else if(this.WasteProd === 2){
    this.WastePoints === 30;
  } else if(this.WasteProd === 1){
    this.WastePoints === 20;
  } else if(this.WasteProd === 0.5){
    this.WastePoints === 5;
  }
}
 
calPersVehUsePoints(){
  if(this.PersVehUse === "10 to 15k miles"){
    this.PersVehUsePoints === 10;
  }
  else if(this.PersVehUse === "1k to 10k miles"){
    this.PersVehUsePoints === 6;
  }
  else if(this.PersVehUse === "Less than 1k miles"){
    this.PersVehUsePoints === 4;
  }
}

calPubTransPoints(){
  if(this.PubTrans === "Over 20k"){
    this.PubTransPoints === 12;
  }
  else if(this.PubTrans === "15k to 20k"){
    this.PubTransPoints === 10;
  }
  else if(this.PubTrans === "10k to 15k"){
    this.PubTransPoints === 6;
  }
  else if(this.PubTrans === "1k to 10k"){
    this.PubTransPoints === 4;
}
else if(this.PubTrans === "Less than 1k"){
  this.PubTransPoints === 2;
}
}

calFlightPoints(){
  if(this.Flight === "Another Continent"){
    this.FlightPoints === 20;
  }
  else if(this.Flight === "Nearby State/Country"){
    this.FlightPoints === 6;
  }
  else if(this.Flight === "Short Distance"){
    this.FlightPoints === 2;
  }
}
  
} 

caltotal(){

  this.total = this.householdPoints + this.houseSizepoints + this.dietPoints + this.foodPoints + this.WaterConsumePoints + this.PurchPoints + this.WastePoints + this.recycle.recyclePoints + this.vehiclePoints + this.publicTransPoints + this.flightPoints;

}
export {FP};

