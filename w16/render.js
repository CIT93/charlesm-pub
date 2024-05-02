import {FORM, TBL} from "./global.js"
import {cfpData, getLS, saveLS} from "./storage.js";

const calculateAvg = (data) => {
  const reduceTotal = data.reduce((sum, ea) => sum + ea.total, 0);
  const tableRef = document.getElementById("table-id");
  let newTR = tableRef.insertRow(-1);
  let newTD = newTR.insertCell(0);
  let newTD_1 = newTR.insertCell(0);
  let newTD_2 = newTR.insertCell(0);
  // let newTD_3 = newTR.insertCell(0);
  // let newTD_4 = newTR.insertCell(0);
  let newLabl = document.createTextNode(`Average Footprint`);
  let newText = document.createTextNode(`${Math.floor(reduceTotal/data.length)}`);
  newTD_1.appendChild(newLabl);
  newTD.appendChild(newText);

}


const renderTblHeading = (data) => {
    //TBL.innerHTML = "";
    const table = document.createElement("Table");
    table. setAttribute("id", "table-id")
    const thead = document.createElement("Thead");
    const tr = document.createElement("tr");
    const headingTextArr =["First","Last","Footprint Total","Actions"];
    headingTextArr.forEach((text) => {
      const th = document.createElement("th");
      th.textContent = text;
      tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    return table
  };

const onUpdate = (index, data) => {
  data.splice(index, 1);
  saveLS(data);
  renderTbl(data);


}

  
const renderTblBtn = (obj, index, data) => {
  const td = document.createElement("td");
  const btnEdit = document.createElement("Button");
  const btnDel = document.createElement("Button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);

btnDel.addEventListener(`click`, e => {
  onUpdate(index, data);
})
btnEdit.addEventListener(`click`, e => {
 
  FORM.firstName.value = obj.first;
  FORM.lastName.value = obj.last;
  FORM.housem.value = obj.houseMembers;
  FORM.houses.value = obj.houseSize;
  FORM.diet.value = obj.dietChoice;
  FORM.foodSource.value = obj.foodSource;
  FORM.water.value = obj.WaterConsumePoints.toString();
  FORM.appliance.checked = obj.applianceNum;

  onUpdate(index, data);
})
  return td;
}



const renderTBLBody = data => {
  const tbody = document.createElement("tbody");
  data.forEach((obj, index) => {
    const tr = document.createElement("tr");  
    const keys = ["first", "last", "total"]
        keys.forEach(key => { 
        const td = document.createElement("td"); 
        td.textContent = obj[key];
        tr.appendChild(td);
        })
     
    const td = renderTblBtn(obj, index, data);
    tr.appendChild(td);
    tbody.appendChild(tr);
     
      
      });
      return tbody;

}




  const renderTbl = (data) => {
     TBL.innerHTML = "";
    
    if(data.length !== 0){
      //console.log("Clear table")
      const table = renderTblHeading();
      const tbody = renderTBLBody(data);  
      table.appendChild(tbody);
      TBL.appendChild(table);
      calculateAvg(data);
      

 }}
//  function addRow() {
//   // Get a reference to the table
//   let tableRef = document.getElementById("tab-data");
//  }

 export { renderTbl} 

 
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

// I pasted lines 101 to 117 from the link provided and also the orignal example underneath but I am not sure what to plug in. Is the tableID TBL? and tableRef? I plugged in TBL as the tableRef and got back errors on dev tools.
// will check solution video and update.