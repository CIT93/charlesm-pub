import {FORM, TBL} from "./global.js"
import {cfpData, getLS, saveLS} from "./storage.js";


const renderTblHeading = function (data) {
    //TBL.innerHTML = "";
    const table = document.createElement("Table");
    const thead = document.createElement("Thead");
    const tr = document.createElement("tr");
    const headingTextArr =["Name","HouseHold","HouseSize","Footprint","Actions"];
    headingTextArr.forEach(function(text){
      const th = document.createElement("th");
      th.textContent = text;
      tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    return table
  }

const onUpdate = function(index, data){
  data.splice(index, 1);
  saveLS(data);
  renderTbl(data);


}

  
const renderTblBtn = function(obj, index, data){
  const td = document.createElement("td");
  const btnEdit = document.createElement("Button");
  const btnDel = document.createElement("Button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);

btnDel.addEventListener(`click`, function(e){
  onUpdate(index, data);
})
btnEdit.addEventListener(`click`, function(e) {
 
  FORM[1].value = obj.firstn;
  FORM[2].value = obj.lastn;
  FORM[3].value = obj.houseM;
  FORM[4].value = obj.houseS;

  onUpdate(index, data);
})
  return td;
}



const renderTBLBody = function (data){
  const tbody = document.createElement("tbody");
data.forEach(function(obj, index){
     console.log(index); 
      const tr = document.createElement("tr");  
      // const td = document.createElement("td");
      for(const[key, value] of Object.entries(obj)){
        if(key !== "lastn" && key !== "houseMPTS" && key !== "houseSPTS"){
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




  const renderTbl = function (data){
     TBL.innerHTML = "";
    
    if(data.length !== 0){
      console.log("Clear table")
      const table = renderTblHeading();
      const tbody = renderTBLBody(data);  
      table.appendChild(tbody);
      TBL.appendChild(table);
 }}

 export { renderTbl} //renderTblHeading };