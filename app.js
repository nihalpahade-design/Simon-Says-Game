let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");


button.addEventListener("click",function(event) {
    let li = document.createElement("li");
    li.innerText = input.value;


    let deletebtn = document.createElement("button");
    deletebtn.innerText = "delete";
    deletebtn.classList.add("delete");

    
    if(input.value != "") {
      ul.appendChild(li);
      li.appendChild(deletebtn);
    }
    input.value = "";
    
   });

   ul.addEventListener("click", function (event) {
    if(event.target.nodeName == 'BUTTON') {
        let deleteItem = event.target.parentElement;
        deleteItem.remove();
        console.log("delete");
    }
   });



       
// let deletes = document.querySelectorAll(".delete");
// for(btns of deletes) {
//     btns.addEventListener("click" , function () {
//     let par = this.parentElement;
//     par.remove();
// });
  
    // }

