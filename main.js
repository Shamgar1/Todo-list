//import Main from "./pokemonClient.js";
let main = new Main();

// window.addEventListener("load", (event) => {
const mylistManager = new listManager();

// create allert on click
const todoInput = document.getElementById("todo-input");
const todoButton = document.getElementById("todo-button");
const todoList = document.getElementById("todo-list");
document.getElementById("todo-list").addEventListener(
	"click",
	function (event) {
		if ("LI" != event.target.tagName) return;
		alert(event.target.innerText);
	},
	false
);

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

function addElemntToDom(value, isPoke) {
	//----add elemnt to page
	const todoDiv = document.createElement("div");
	todoDiv.classList.add("todo");
	todoDiv.setAttribute("data-arr", value);
	const newTodo = document.createElement("li");

	if (isPoke) {
		newTodo.innerText = "catch " + value;
	} else {
		newTodo.innerText = value;
	}
	newTodo.classList.add("todo-item");
	todoDiv.appendChild(newTodo);

	//---add button complete
	const completedButton = document.createElement("button");
	completedButton.innerHTML = `<i class="fas fa-check"></i>`;
	completedButton.classList.add("complete-btn");
	todoDiv.appendChild(completedButton);

	//---add button trash
	const trashButton = document.createElement("button");
	trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
	trashButton.classList.add("trash-btn");
	todoDiv.appendChild(trashButton);
	todoList.appendChild(todoDiv);
}

function deleteCheck(event) {
	const item = event.target;
	if (item.classList[0] === "trash-btn") {
		const todo = item.parentElement;
		todo.classList.add("fall");

		const arrName = todo.attributes["data-arr"].value;
		const place = mylistManager.listArray.indexOf(arrName);
		mylistManager.listArray.splice(place, 1);
		todo.addEventListener("transitionend", function (e) {
			todo.remove();
		});
	}

	if (item.classList[0] === "complete-btn") {
		const todo = item.parentElement;
		todo.classList.toggle("completed");
	}
}

const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clearArray);
function clearArray() {
	mylistManager.listArray = [];
	todoList.innerHTML = "";
}
