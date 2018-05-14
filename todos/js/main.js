//	VARIABLE
var todoList = document.getElementById("todoList");
var input = document.getElementById("todo");


//EVENT LISTENERS

eventListeners();

function eventListeners() {

	document.querySelector("#form").addEventListener('submit', newTodo);


	//Remove from the list
	todoList.addEventListener('click', removeTodo);

	//document
	document.addEventListener('DOMContendLoaded', localStorageOnLoad);


}

// Now, we'll set up a click event handler for the document.
// Any clicks inside the document (even on the new items created later)
// will bubble up and be intercepted by this event handler
document.body.addEventListener("click", function (event) {
	// Check to see if the event originated at a list item
	if (event.target.nodeName === "LI") {
		// Change that element's color by appyling a pre-made CSS class.
		event.target.classList.toggle("selected");
	}
});


//FUNCTIONS

function newTodo(e) {
	e.preventDefault();

	//Read the textarea value
	var todo = document.getElementById('todo').value;


	//create the remove button
	var removeBtn = document.createElement('a');
	removeBtn.classList = "remove";
	removeBtn.textContent = 'X';


	//create an <li> element
	var li = document.createElement('li');
	li.textContent = todo;
	input.value = ""; // Clear out the input
	if (todo === '') {
		alert("Please add something!")
	} else {
		document.getElementById("todoList").appendChild(li);
	}
	document.getElementById("todo").value = "";

	//Add remove button
	li.appendChild(removeBtn);

	//Add to local storage

	addTodoLocalStorage(todo);


}


//remove todo list
function removeTodo(e) {
	if (e.target.classList.contains('remove')) {
		e.target.parentElement.remove();
	}
}

function addTodoLocalStorage(todo){
	var todos = getTodosFromStorage();

	todos.push(todo);

	//convert todo array into string
	localStorage.setItem('todos', JSON.stringify(todos));

}

function getTodosFromStorage(){
	var todos;
	var todosLS = localStorage.getItem('todos');
	//get the values, if null is returned then we create an empy array
	if(todosLS === null) {
		todos =[]
	}else{
		todos = JSON.parse(todosLS);
	}
	return todos;
}

//display from local storage 
function localStorageOnLoad(){
	var todos = getTodosFromStorage();
	
	//looping through storage and display
	todos.forEach(function(todo){
	
	//create an <li> element
	var li = document.createElement('li');
	li.textContent = todo;
	
	//Add remove button
	li.appendChild(removeBtn);
	todoList.appendChild(li);


	
});
}