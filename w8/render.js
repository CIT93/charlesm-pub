const TBL = document.getElementById("tab-data");
const FORM = document.getElementById("form");

function renderTblHeading(){
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

function renderTblBtn(obj, index, data){
  const td = document.createElement("td");
  const btnEdit = document.createElement("Button");
  const btnDel = document.createElement("Button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);

btnDel.addEventListener(`click`, function(e){
  console.log(`Hello from inside the delete button`);
  console.log(e);
  
  data.splice(index, 1);
  renderTbl(data);
  // I noticed here when I added the index to the the renderTbl, the whole table along with the data went away after clicking delete but got error messages on other lines. 
  //
})

btnEdit.addEventListener(`click`, function(e) {
 
  FORM[1].value = obj.firstn;
  FORM[2].value = obj.lastn;
  FORM[3].value = obj.houseM;
  FORM[4].value = obj.houseS;

  data.splice(index, 1);
  renderTbl(data);

  //i feel like something can be added here so when the edit button is clicked, we can retrieve the initial inputs. I created a console log to display the message reuse data and I am thinking I can add something here to re populate the first name, last name, house member number and size.
} )
  return td;
}



function renderTBLBody(data){
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




  function renderTbl(data){
     TBL.innerHTML = "";
    
    if(data.length !== 0){
      const table = renderTblHeading();
      const tbody = renderTBLBody(data);  
      table.appendChild(tbody);
      TBL.appendChild(table);
 }

    }
    export{renderTbl,renderTblHeading};