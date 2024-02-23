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
    // i am thinking an else if statement would work here but i am not sure how to apply it. 
  }
  function renderTbl(data){
     
    
    const table = renderTblHeading();
      const tbody = document.createElement("tbody");
      const tr = document.createElement("tr");
      const trTextArr = ["Charles", 5, "small", 10];
     data.forEach(function(objText){
      for (const [key, CBFdata] of Object.entries(objText)) {
       //my attempt to change the reference in the forEach from trTextArr to be the reference to the array of objects
       
        if key == "lastn, houseM, houseS"
        //this is my attempt to loop over the object and write conditional logic. I really do not know what to do from here. 
         const td = document.createElement("td");
        td.textContent = CBFdata;
        tr.appendChild(td);
        
      }
    
   
      //console.log(objText);
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

  //no idea how i will need to consider about how and where you update (append or appendChild) 