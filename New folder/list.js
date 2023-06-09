
//validate form inputs before adding data
function validateForm(){
    var name=document.getElementById("name").value;
    var officeTime=document.getElementById("officeTime").value;
    var gymTime=document.getElementById("gymTime").value;

    if(name=="")
    {
        alert("Name is required");
        return false;
    }
    if(officeTime=="")
    {
        alert("officetime is required");
        return false;
    }
    if(gymTime=="")
    {
        alert("gymtime is required");
        return false;
    }
    return true;
}

//function to showdata
function showData(){
    var todoList;
    if(localStorage.getItem("todoList") == null)
    {
        todoList=[];
    }
    else
    {
        todoList=JSON.parse(localStorage.getItem("todoList"));
    }

    var html="";

    todoList.forEach(function(element,index)
    {
    html += "<tr>";
    html +="<td>" + element.name + "</td>";
    html +="<td>" + element.officeTime + "</td>";
    html +="<td>" + element.gymTime + "</td>";
    html += '<td><button onclick="deleteData('+index+')" class="btn btn-danger">Delete</button><buttononclick="updateData('+index+')" class="btn btn-warning m-2>Edit</button></td>';
    html +="</tr>";
    });
        
  document.querySelector("#crudTable tbody").innerHTML=html; 
}

//loads all data from local storage when document or page is loaded
document.onload=showData();

//function to add data to local storage
function AddData(){
    //if form is validate
    if(validateForm==true){
        var name=document.getElementById("name").value;
        var officeTime=document.getElementById("officeTime").value;
        var gymTime=document.getElementById("gymTime").value;

        var todoList;
        if(localStorage.getItem("todoList")== null){
            todoList=[];
        }
        else
        {
            todoList=JSON.parse(localStorage.getItem("todoList"));
        }

        todoList.push({
            name : name,
            officeTime : officeTime,
            gymTime : gymTime,
        });

        localStorage.setItem("todoList",JSON.stringify(todoList));
        showData();
        var name=document.getElementById("name").value="";
        var officeTime=document.getElementById("officeTime").value="";
        var gymTime=document.getElementById("gymTime").value="";
    }
}

//function to delete data from local storage
function deleteData(index){
    var todoList = [];
    if(localStorage.getItem("todoList")==null){
        todoList=[];
    }
    else
    {
        todoList=JSON.parse(localStorage.getItem("todoList"));
    }

    todoList.splice(index,1);
    localStorage.setItem("todoList",JSON.stringify(todoList));
    showData();
}

//function to update edit in local storage
function updateData(index){

    document.getElementById("submit").style.display="none";
    document.getElementById("Update").style.display="block";

    var todoList;
    if(localStorage.getItem("todoList")==null){
        todoList=[];
    }
    else
    {
        todoList=JSON.parse(localStorage.getItem("todoList"));
    }
}