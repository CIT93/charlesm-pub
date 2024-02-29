const TBL = document.getElementById("tab-data");

function renderTblHeading(){
    TBL.innerHTML = "";
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

function renderTblBtn(index, data){
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
  //need help here. i understand the purpose of a splice but do not understand how using one applies here. 
  // when deleting from the index the numbers in the splice parentheses applies to the location of what numbers are being deleted. But how does it apply here?
})

btnEdit.addEventListener(`click`,function(e) {
  console.log(`Reuse original data`);
  console.log(e);
  //add another splice here
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
        if(key !== "lastName" && key !== "houseMPTS" && key !== "houseSPTS"){
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
        }
        }
      const td = renderTblBtn(index, data);
     tr.appendChild(td);
     tbody.appendChild(tr);
     
      
      });
      return tbody;

}




  function renderTbl(data){
     const table = renderTblHeading();
     const tbody = renderTBLBody(data);
      
      //const tr = document.createElement("tr");   
      table.appendChild(tbody);
      TBL.appendChild(table);
  }
  export{renderTbl,renderTblHeading};