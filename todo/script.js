//Adding functionality by using their id 
const text = document.getElementById("text");
const addTaskButton = document.getElementById("add-task-btn");
const saveTaskButton = document.getElementById("save-todo-btn");
const listBox = document.getElementById("listBox");
const saveInd = document.getElementById("saveIndex");

//array to store all the todo tasks so initialize one
let todoArray = [];

//click event on the add button
addTaskButton.addEventListener("click", (e) => { 
    let todo = localStorage.getItem("todo");//store todo array in local storage on every change
    if (todo === null) {  //checking whether the given data from local storage is null
      todoArray = []; //if there is no data an empty array is created
    } else {
      todoArray = JSON.parse(todo);//retrieved data is parsed json string into an array and store to todo array
    }
    todoArray.push(text.value); //to add a task to array push it to the todo array
    text.value = ""; //to empty the field after task is added
    localStorage.setItem("todo", JSON.stringify(todoArray));//the updated todo array is coverted to json string using stringify
    displayTodo();//to display update the todo list on the page
   });

  //display the to do list changes

   function displayTodo() {
    let todo = localStorage.getItem("todo");//retrieves the value from local storage and assigns it to the todo variable
    if (todo === null) { //checks whether the retrieved data is null
      todoArray = [];
    } else {
      todoArray = JSON.parse(todo);//if there is no data an empty array is created
    }
    let htmlCode = ""; //initialize an empty string variable
    todoArray.forEach((list, ind) => { //iterates over each element using foreach loop list rep value of current element and ind represents index of current element
      htmlCode += `<div class='flex mb-4 items-center'> 
      <p class='w-full text-grey-darkest'>${list}</p>
      <button onclick='edit(${ind})' class='flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-white text-grey bg-green-600'>Edit</button>
      <button onclick='deleteTodo(${ind})' class='flex-no-shrink p-2 ml-2 border-2 rounded text-white bg-red-500'>Delete</button>
   </div>`;//appends htmlcode to htmlcode string variable
    });
    listBox.innerHTML = htmlCode;//sets the innerhtml property of element with id listbox to htmlcode string
   }

   //delete items from the todo list

   function deleteTodo(ind) { //retrieves the data from local storage 
    let todo = localStorage.getItem("todo"); //assigns the value to todo variable
    todoArray = JSON.parse(todo);//change string format into an array
    todoArray.splice(ind, 1);//splice method helps to delete the item at the specified index
    //after deleting store the changes to local storage 
    localStorage.setItem("todo", JSON.stringify(todoArray));//updated array is coverted to json string
    displayTodo();//call displaytodo to display on web page
   }
   
   //updating items on the todo  list
   
   //edit the todo list in specified index
   function edit(ind) { //passing index as a parameter
    saveInd.value = ind; //to store the index
    let todo = localStorage.getItem("todo");
    todoArray = JSON.parse(todo);
    text.value = todoArray[ind];//sets the value of an id 
    addTaskButton.style.display = "none";//it hides the add button
    saveTaskButton.style.display = "block";// it displays the button to save the edited task
   }
   
   //saving the edited task in todo list
   saveTaskButton.addEventListener("click", () => { //click event listener to the save task button
    let todo = localStorage.getItem("todo");
    todoArray = JSON.parse(todo);
    let id = saveInd.value;//retrieves the id of the text using saveind input
    todoArray[id] = text.value;//updates the value at the index and save the changes to the local storage
    addTaskButton.style.display = "block";
    saveTaskButton.style.display = "none";//it hides the button used for saving the edited task
    text.value = "";// it clears the input field
    localStorage.setItem("todo", JSON.stringify(todoArray));//the updated array is converted to string and stored in the local storage
    displayTodo();//displays the updated output
   });
  