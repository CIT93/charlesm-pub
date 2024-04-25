import { FP } from "./fp.js";


function calculateScore(FPArray) {
return FPArray.map(fp => {
    const householdPoints = fp.householdPoints;
    const houseSizepoints = fp.houseSizepoints;
    const dietPoints = fp.dietPoints;
    return householdPoints + houseSizepoints + dietPoints;
});
}


const FPs = [
new FP("John", "Doe", 3, "medium", "vegetarian"),
new FP("Jane", "Smith", 2, "small", "domMeatDaily"),

];

const scores = calculateScore(FPs);
console.log(scores);

//first off, this code is from chatGPT. I believe I understand it and can explain what is going on. I just needed help writing the code. 

// a function was created to calculate scores using FPArray as the parameter(variable) and return it after it is mapped. on line 14, a new const variable is is made and constructed like an array.
//In the array, you can input whatever information you need to get the result you want by and those inputs will equal a certain score.
//on line 20 another const variable is created but it calling the calcualteScore passing in FPS. It basically is going to use the calculateScore function to calculate what ever is in the Const FPs array.
//console.log will display those reults. 