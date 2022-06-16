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
			.then(function (response) {
				if (!response.ok) {
					// const error = `Could not find Pokemon id: ${todoInput}`;
					return Promise.reject(error);
				}
				return response.json();
			})
			// .then((data) => console.log(data))
			.catch((error) => {
				const message = `Could not find Pokemon id: ` + todoInput.value;
				console.log("Could not find Pokemon id:", error);
				let noPokimon = response.json;
				return noPokimon(message);
				// return error;
			});
	};

	// deleteItem = async (item) => {
	// 	fetch(`/api/todo/${item.id}`, { method: "DELETE" })
	// 		.then((res) => res.json())
	// 		.then((json) => {
	// 			let elment = document.querySelectorAll(`[data-id="${item.id}"]`);
	// 			elment.parentNode.removeChild(elment);
	// 		});
	// };

	renderItems = async () => {
		const list = document.getElementById("todo-list");
		list.innerHTML = "";
		fetch("/api/todo")
			.then((res) => res.json())
			.then((json) => {
				json.forEach((item, i) => {
					const listItem = document.createElement("li");
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

	_createDeleteButton = (item) => {
		const button = document.createElement("img");
		button.src = "./images/delete_icon.svg";
		button.classList.add("list-item-delete-button");
		button.addEventListener("click", (_) => this.deleteItem(item));
		return button;
	};
}

const main = new Main();

document.addEventListener("DOMContentLoaded", function () {
	main.init();
});
