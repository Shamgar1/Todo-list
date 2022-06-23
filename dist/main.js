class Main {
	constructor() {
		this.itemClient = new ItemClient();
	}

	init = async () => {
		const addItemButton = document.getElementById("list-item-submit");
		addItemButton.addEventListener("click", this.handleItem);
		await this.renderItems();
	};

	handleItem = async () => {
		const input = document.getElementById("list-item-input");
		const inputValue = input.value;
		console.log("maayan");
		await this.itemClient.postItem(inputValue);
		console.log("maayan1");
		await this.renderItems();
		console.log("maayan2");
	};

	deleteItem = async (item) => {
		await this.itemClient.deleteItem(item);
		const items = await this.itemClient.getItems();

		await this.renderItems();
	};

	renderItems = async () => {
		const list = document.getElementById("list");
		list.innerHTML = "";

		const items = await this.itemClient.getItems();

		items.forEach((item) => {
			const listItem = document.createElement("li");
			listItem.classList.add("list-item");
			listItem.innerHTML = item.itemName;

			if (item.status) {
				listItem.classList.add("completed");
			}
			const listItemDeleteButton = this._createDeleteButton(item);
			const listItemCompleteButton = this._createCompleteButton(item);
			listItem.appendChild(listItemDeleteButton);
			listItem.appendChild(listItemCompleteButton);
			list.appendChild(listItem);
		});
	};

	_createDeleteButton = (item) => {
		const button = document.createElement("img");
		button.src = "./images/delete_icon.svg";
		button.classList.add("list-item-delete-button");
		button.addEventListener("click", (_) => this.deleteItem(item));
		return button;
	};

	_createCompleteButton = (item) => {
		const button = document.createElement("complete-button");
		button.innerHTML = `<i class="fas fa-check"></i>`;
		button.classList.add("list-item-complete-button");
		button.addEventListener("click", (_) => this.completeItem(item));
		return button;
	};

	completeItem = async (item) => {
		const isDone = !item.status;
		await this.itemClient.postIsCompleted(item.id, isDone);

		await this.renderItems();
	};
}

const main = new Main();

document.addEventListener("DOMContentLoaded", function () {
	main.init();
});
