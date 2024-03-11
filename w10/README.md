In regards to the video talking about functions, I feel now that my underdstanding is 50/50. Maybe with some more practice with easier things to code, I can understand it better. (up to roughly the 10:00 minute of the video). IWhat I learned or began to understand more was a block scope. I heard that term used a lot th last few weeks and heard it in this video. I researched it more and now realize what it is and how much they are used. Basically anything inside {}. 

const add2 = function(...a){
    return 2 + a[3];
}

const result = add2(1,2,3,4);

//spread argument

//IIFE

const a = 3

(function(a) {
    console.log("inside IIFE");
    console.log(a);
})(a);