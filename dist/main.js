class Main {
	constructor() {
		// this.itemClient = new ItemClient();
	}

	init = async () => {
		const addItemButton = document.getElementById("todo-button");
		addItemButton.addEventListener("click", this.handleItem);
		await this.renderItems(); // this will make it so that any time you refresh the page you'll see the items already in your todo list
	};

	handleItem = async () => {
		let todoInput = document.getElementById("todo-input").value;
		console.log(todoInput);
		fetch(`/api/todo`, {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({ todoInput }),
		})
			// .then((res) => res.json())
			// .then((res) => console.log(res));
			.then(function (res) {
				location.reload();
				return res.json();
			})
			.catch((error) => {
				console.log(error);
				return error;
			});
	};

	renderItems = async () => {
		const list = document.getElementById("todo-list");
		list.innerHTML = "";
		fetch("/api/todo")
			.then((res) => res.json())
			.then((json) => {
				json.forEach((item, i) => {
					let listItem = document.createElement("li");
					listItem.classList.add("list-item");
					let itemId = i + 1;
					listItem.setAttribute("data-id", itemId);
					listItem.innerHTML = item.name;
					const listItemDeleteButton = this._createDeleteButton(item);
					listItem.appendChild(listItemDeleteButton);
					list.appendChild(listItem);
				});
			});
	};

	deleteItem = async (item) => {
		console.log("hay");
		let listItem = document.getElementById("li");
		let itemId = document.getAttribute("data-id");
		console.log("itemId");
		fetch(`/api/todo/${itemId}`, { method: "DELETE" })
			.then((res) => res.json())
			.then((json) => {
				console.log(item);
				console.log(itemId);
				let elment = document.querySelectorAll(`[data-id="${itemId}"]`);
				elment.parentNode.removeChild(elment);
			});
	};

	_createDeleteButton = (item) => {
		// let listItem = document.getElementById("li");
		const button = document.createElement("img");
		button.src = "./images/delete_icon.svg";
		button.classList.add("list-item-delete-button");

		// let deleteButton = document.getElementById("todo-button");
		button.addEventListener("click", (_) => console.log("hay"));
		//  this.deleteItem(item));
		return button;
	};
}

const main = new Main();

document.addEventListener("DOMContentLoaded", function () {
	main.init();
});
