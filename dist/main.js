class Main {
	constructor() {
		this.itemClient = new ItemClient();
	}

	init = async () => {
		const addItemButton = document.getElementById("todo-button");
		addItemButton.addEventListener("click", this.handleItem);
		await this.renderItems(); // this will make it so that any time you refresh the page you'll see the items already in your todo list
	};

	//adding a todo
	handleItem = async () => {
		let todoInput = document.getElementById("todo-input").value;
		const item = await itemClient.addTodo(todoInput);
		location.reload();
		return item;
	};

	renderItems = async () => {
		const list = document.getElementById("todo-list");
		list.innerHTML = "";
		const items = await itemClient.renderItems();

		items.forEach((item, i) => {
			let listItem = document.createElement("li");
			listItem.classList.add("list-item");
			let itemId = i + 1;
			listItem.setAttribute("data-id", itemId);
			listItem.innerHTML = item.name;
			const listItemDeleteButton = this._createDeleteButton(item);
			listItem.appendChild(listItemDeleteButton);
			list.appendChild(listItem);
		});
		list.addEventListener("click", function (e) {
			if (e.target.classList.contains("list-item")) {
				main.deleteItem(e.target.dataset);
			}
		});
	};

	deleteItem = async (item) => {
		// console.log("hay");
		// const item = document.getElementById("li");
		await itemClient.deleteItem(item);
		location.reload();
		// let itemId = document.getAttribute("data-id");
		// console.log("itemId");
		// console.log(item);
		// console.log(itemId);
		// let elment = document.querySelectorAll(item);
		// elment.parentNode.removeChild(elment);
	};

	_createDeleteButton = (item) => {
		// let listItem = document.getElementById("li");
		const button = document.createElement("img");
		button.src = "./images/delete_icon.svg";
		button.classList.add("list-item-delete-button");

		// let deleteButton = document.getElementById("todo-button");
		button.addEventListener("click", (_) => this.deleteItem(item));
		return button;
	};
}
const itemClient = new ItemClient();
const main = new Main();

document.addEventListener("DOMContentLoaded", function () {
	main.init();
	// itemClient.addTodo();
});
