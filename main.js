class Main {
	constructor() {
		this.mylistManager = new listManager();
	}

	init = () => {
		const todoButton = document.getElementById("todo-button");
		todoButton.addEventListener("click", addTodo);
	};
	// create allert on click
	handleItem = async () => {
		const todoInput = document.getElementById("todo-input");
	};

	renderItems = () => {
		const todoList = document.getElementById("todo-list");
		todoList.addEventListener(
			"click",
			(event) => {
				if ("LI" != event.target.tagName) return;
				alert(event.target.innerText);
			},
			false
		);
	};

	addElemntToDom(value, isPoke) {
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
		todoList.addEventListener("click", deleteCheck);
	}

	deleteCheck(event) {
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

	clearArray() {
		const clearButton = document.getElementById("clear-button");
		clearButton.addEventListener("click", clearArray);
		mylistManager.listArray = [];
		todoList.innerHTML = "";
	}
}
let main = new Main();

// window.addEventListener("load", (event) => {
