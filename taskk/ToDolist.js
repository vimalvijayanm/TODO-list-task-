var selectedRow=null;

//show alerts
function showAlert(message,className){
    const div=document.createElement("div");
    div.className=`alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container=document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div,main);

    setTimeout(() => document.querySelector(".alert").remove(),3000);
}


//clear all fields
function clearFields(){
    document.querySelector("#Name").value="";
    document.querySelector("#OfficeTime").value="";
    document.querySelector("#GymTime").value="";
 }

//Add data 

document.querySelector("#ToDo-Form").addEventListener("submit", (e) =>{
     e.preventDefault();

     //get form values
   const Name=document.querySelector("#Name").value;
   const officeTime=document.querySelector("#OfficeTime").value;
   const gymTime=document.querySelector("#GymTime").value;

   //validate
   if(Name=="" || officeTime=="" || gymTime=="")
   {
    showAlert("please fill in all the details");
   }
   else
   {
    if(selectedRow==null){
    const list=document.querySelector("#ToDo-List");
    const row=document.create("tr");

    row.innerHTML=`
    <td>${Name}</td>
    <td>${officeTime}</td>
    <td>${gymTime}</td>
    <td>
    <a href="#" class="btn btn-warning btn-sm Update">Update</a>
    <a href="#" class="btn  btn-danger btn-sm Delete">Delete</a>
     `;
     list.appendChild(row)
     selectedRow=null;
     showAlert("student added","succes");
   }
 }
});

//delete data

document.querySelector("#ToDo-List").addEventListener("click", (e) =>{
         target=e.target;
         if(target.classList.contains("Delete")){
              target.parentElement.parentElement.remove();

         }
});