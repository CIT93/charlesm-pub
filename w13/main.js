const FORM = document.getElementById('form');
const OUT = document.getElementById('output');

function updateDOM(message, el) {
    const newEl = document.createElement(el);
    newEl.textContent = message;
    OUT.appendChild(newEl);
}

const startWorkout = (type, reps, time, fn) => {
    const myPromise = new Promise((resolve, reject) => {
    //    throw new Exception(); testing catch logic
        
        resolve(
            setTimeout(() => {
                fn(`Stop ${type}` , "h1");
                }, 2000)
        );
    });
    myPromise.
        then(() => {
        fn(`Start ${type} <> Goal reps is ${reps} <> complete in ${time} min!` , "p");
        }).catch(()=>{
        fn('Invalid Entry', "p");
    })
    };
    

FORM.addEventListener('submit', e => {
    e.preventDefault();
    const type = e.target.type.value
    const reps = parseFloat(e.target.reps.value)
    const time = parseFloat(e.target.time.value)
    startWorkout(type, reps, time, updateDOM)
    FORM.reset();
})






// const myPromise = new Promise((resolve, reject) => {
//     resolve(
//         setTimeout(() => {
//             console.log(`Stop ${type}` , "h1");
//             }, 5000)
//     );
// });
// myPromise.then(() => {
//     console.log(`Start ${type} <> Goal reps is ${reps} <> complete in ${time} min!` , "p");
//     }
// );





// let p = new Promise((resolve, reject)=>{
//     let a = 1 + 2
//     if (a == 2){
//         resolve('Success')
//     } else {
//         reject('Failed')
//     }
// })

// p.then((message)=>{
//     console.log(`Start ${type} <> Goal reps is ${reps} <> complete in ${time} min!` , "p"))
// }).catch((message) => {
//     console.log('This is in the catch' + message)
// })