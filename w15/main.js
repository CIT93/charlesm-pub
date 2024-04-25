import { renderTbl } from "./render.js";

import {FORM, FNAME, LNAME, SUBMIT} from "./global.js";
import {saveLS, cfpData} from "./storage.js";
import { FP } from "./fp.js";
function start(houseHoldmembers, houseSize, firstName, lastName) {
    const householdPTS = dHp(houseHoldmembers);
    const houseSizepoints = dHSp(houseSize);
    const total = householdPTS + houseSizepoints;
  
    cfpData.push({
      firstn: firstName,
      lastn: lastName,
      houseM: houseHoldmembers,
      houseS: houseSize,
      houseMPTS: householdPTS,
      houseSPTS: houseSizepoints, 
      cfpTotal: total});
    
      
  }


renderTbl(cfpData);

 // Function to validate a single field
  const validateField = event => {
    const field = event.target.value;
    const fieldId = event.target.id;
    const fieldError = document.getElementById(`${fieldId}Error`);

  if (field === '') {
      fieldError.textContent = `${fieldId} is required`;
      event.target.classList.add('invalid');
  } else {
      fieldError.textContent = '';
      event.target.classList.remove('invalid');
  }
}
   // Attach blur event listeners

   
    FNAME.addEventListener('blur', validateField);
    LNAME.addEventListener('blur', validateField);

    


FORM.addEventListener('submit', e => {
  e.preventDefault();
  
  // const firstNameIsValid = FNAME.value !=='';
  // const lastNameIsValid = LNAME.value !=='';
  if (FNAME.value !=='' && LNAME.value !=='') {
  SUBMIT.textContent = '';
    // start(parseInt(FORM.housem.value,), FORM.houses.value, FNAME.value, LNAME.value);
    const fpObj = new FP(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value, FORM.diet.value);
    // fpObj.houseHoldPoints();
    // fpObj.houseSizepoints();
    cfpData.push(fpObj);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form requires first name and last name";
  } 
});

// const displayPosts = posts => {
//   const filterPostsArr = posts.filter(post => {
//        return post.userId === 1 && post.title.length > 10
//   })
//    console.log(filterPostsArr);

//    //map
//   const mappedPostsArr = filterPostsArr.map(post => {
//        return post.title.length 
//   })
//   console.log(mappedPostsArr);

//   const total = mappedPostsArr.reduce((sum, len) => sum + len, 0);
//   console.log(total);
//   const avg = total/ mappedPostsArr.length
//   console.log(avg);
// }

// function addRow(tableID) {
//   // Get a reference to the table
//   let tableRef = document.getElementById(tableID);

//   // Insert a row at the end of the table
//   let newRow = tableRef.insertRow(-1);

//   // Insert a cell in the row at index 0
//   let newCell = newRow.insertCell(0);

//   // Append a text node to the cell
//   let newText = document.createTextNode("New bottom row");
//   newCell.appendChild(newText);
// }

// // Call addRow() with the table's ID
// addRow("my-table");

// going tpo need access to all data

// const url = "https://jsonplaceholder.typicode.com/posts"

// const getPosts = async () => {
//     try {
//         const request = await fetch(url);
//         const data = await request.json();
//         if(data.length) {
//             onSuccess(data);
//         }else {
//           console.log('error on return value');  
//         }
//         } catch {
//            onError(error); 
//         }
//     }

//     const displayPosts = posts => {
//        const filterPostsArr = posts.filter(post => {
//             return post.userId === 1 && post.title.length > 10
//        })
//         console.log(filterPostsArr);

//         //map
//        const mappedPostsArr = filterPostsArr.map(post => {
//             return post.title.length 
//        })
//        console.log(mappedPostsArr);

//        const total = mappedPostsArr.reduce((sum, len) => sum + len, 0);
//        console.log(total);
//        const avg = total/ mappedPostsArr.length
//        console.log(avg);

       //how would you calculate average?

        // posts.forEach(post => {
        //     console.log(post)
        // })
    // }

    // const onError = err => {
    //     console.log(`Error ${err}`);
    // }
    // const onSuccess = posts => {
    //     displayPosts(posts);
    // }
    // const start = () => {
    //     getPosts();
    // }

    // start();

//     a forEach function calls a function for each element in an array. I found a great example that is simple for me to explain.

// const fruits = ['apple', 'banana', 'orange'];

// fruits.forEach((fruit, index) => {
//   console.log(`Fruit at index ${index}: ${fruit}`);
// });
// so fruits is the array. the index is 0,1,2.apple being 0, banana being 1 and orange being 2. so when console.log prints it is basically saying the fruit at that particular index equals the fruit name in that same index. example: 'Fruit at index 0: apple'. 

// second video:
// my understanding is that we are using the filter method on the posts array and create a new array that has the meets certain criteria that is defined when calling back the function.

// thrid video:
// the differnece between filtering and mapping is filtering is choosing certain elemnts based on certain criteria and mapping is about changing each element of an array into something different. For example, using the code from the code along : 
// const mappedPostsArr = filterPostsArr.map(post => {
//     return post.title.length 
// })
// const mappedPostsArr is the new array using the filterPostsArr but is going to change it with the .map. When returning, the new value is going to be inside of the new array.

// fourth video(code challenge):
// An average of a set of groups is suming up everything from those groups and dividing by the number of groups. So const total is the total sum  and mappedPostsArr.length has the number of elements of the array. 

// fifth video(code update):
// I just realized i hadn't commented out my old code. I made sure i did that before the last commit. Also, for the code challenge, all i needed to add was the console.log(avg). Other than that I got it. 