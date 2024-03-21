import {FORM, TBL} from "./global.js"
import {cfpData, getLS, saveLS} from "./storage.js";


const renderTblHeading = (data) => {
    //TBL.innerHTML = "";
    const table = document.createElement("Table");
    const thead = document.createElement("Thead");
    const tr = document.createElement("tr");
    const headingTextArr =["Name","HouseHold","HouseSize","Footprint","Actions"];
    headingTextArr.forEach((text) => {
      const th = document.createElement("th");
      th.textContent = text;
      tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    return table
  }

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

  onUpdate(index, data);
})
  return td;
}



const renderTBLBody = (data) => {
  const tbody = document.createElement("tbody");
data.forEach((obj, index) => {
     console.log(index); 
      const tr = document.createElement("tr");  
      // const td = document.createElement("td");
      for(const[key, value] of Object.entries(obj)){
        if(key !== "last" && key !== "householdPoints" && key !== "houseSizepoints"){
        const td = document.createElement("td"); 
        td.textContent = value;
        tr.appendChild(td);
        }
        }
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
      const table = renderTblHeading(data);
      const tbody = renderTBLBody(data);  
      table.appendChild(tbody);
      TBL.appendChild(table);
 }}

 export { renderTbl} //renderTblHeading };

 // I am completly lost on this one. As much as I would like to try, I really don't know where to begin.