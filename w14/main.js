// function renderPhotos(photos) {
//     photos.forEach((img) => {
//     const imgEl = document.createElement("img");
//     imgEl.setAttribute("src", img.thumbnailUrl);
//     document.getElementById("output").appendChild(imgEl);
// })
// }
// async function getPhotos(){

// }

// async function start(){

// }
// start();
const OUT = document.getElementById('output');


async function start(){
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/fhfh')
        const result = await data.json()
        onSuccess(result)
        
       
    }catch(e){
        console.log('Error detected');
        onError(e)
        
    }
    
   
}


function onSuccess(result){
    // console.log(`Success: ${Object.keys(result)}`)
    // console.log(`Success: ${result}`)
    updateDOM('Here are the names:')
    for (const index in result) {
        // console.log(`${index}: ${result[index].name}`);
        updateDOM(result[index].name,"p" );
      }
        
        
    
}

function onError(err){
    console.log('Error detected')
}

start()

function updateDOM(message, el) {
    const newEl = document.createElement(el);
    newEl.textContent = message;
    OUT.appendChild(newEl);
}

