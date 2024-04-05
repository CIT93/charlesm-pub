const FORM = document.getElementById('form');
const OUT = document.getElementById('output');

function updateDOM(message, el) {
    const newEl = document.createElement(el);
    newEl.textContent = message;
    OUT.appendChild(newEl);
}

const startWorkout = (type, reps, time, fn) => {
    fn(`Start ${type} <> Goal reps is ${reps} <> complete in ${time} min!` , "p");
    setTimeout(()=>(
       fn(`Stop ${type}` , "h1" )
    ), time = 1000)
}

FORM.addEventListener('submit', e => {
    e.preventDefault();
    const type = e.target.type.value
    const reps = parseFloat(e.target.reps.value)
    const time = parseFloat(e.target.time.value)
    startWorkout(type, reps, time, updateDOM)
    FORM.reset();
})