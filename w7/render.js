const TBL = document.getElementById("tab-data");

function renderTblHeading(){
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
  function renderTbl(data){
     const table = renderTblHeading();
      const tbody = document.createElement("tbody");
      const tr = document.createElement("tr");
      const trTextArr = ["Charles", 5, "small", 10];
     trTextArr.forEach(function(text){
      const td = document.createElement("td");
      td.textContent = text;
      tr.appendChild(td);
     })
     const td = document.createElement("td");
     const btnEdit = document.createElement("Button");
     const btnDel = document.createElement("Button");
     btnEdit.textContent = "Edit";
     btnDel.textContent = "Del";
     
     
     td.appendChild(btnEdit);
     td.appendChild(btnDel);
     tr.appendChild(td);
     tbody.appendChild(tr);
  
     table.appendChild(tbody);
     
     
     TBL.appendChild(table);
  }
  export{renderTbl,renderTblHeading};