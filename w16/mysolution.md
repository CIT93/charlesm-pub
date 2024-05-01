calWaterConsumePoints(){
  if(this.WaterConsume === "9+"){
    this.WaterPoints = 3;
  }
  else if(this.WaterConsume === "4 to 9"){
    this.WaterPoints === 2;
  }
  else if(this.WaterConsume === "1 to 3"){
    this.WaterPoints === 1;
  }

// i feel right here I would pass in a function that defines the amount of appliances and tell it to double the points if needed or not even run calWaterConsumePoints.
//not entirely sure how to do this. 
i feel like the notes attached to my code attempt on fp.js are how i may need to start but not sure how to finish it