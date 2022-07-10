export default class ListApiService {
	/**
	 * A function to get all existing todo items
	 * @returns {Promise<{ name: string, id: number, status: bool }[]>}
	 */
	static async getItems() {
		const response = await fetch("http://localhost:3000/items");
		const todos = await response.json();

		return todos;
	}

	/**
	 * A function to add a new item to the list
	 * @param itemName: string
	 * @returns {Promise<object>}
	 */
	static async postItem(itemName) {
		const response = await fetch("http://localhost:3000/item", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ item: itemName }),
		});

		return response;
	}

	/**
	 * A function to toggle an item in the list
	 * @param item: { name: string, id: number, status: bool }
	 * @returns {Promise<boolean>}
	 */
	static async toggleDone(item) {
		const response = await fetch(`http://localhost:3000/item/${item.id}`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ item }),
		});
		const todos = await response.json();
		return todos;
	}

	/**
	 * A function to remove an item from the list
	 * @param item: { name: string, id: number, status: bool }
	 * @returns {Promise<boolean>}
	 */
	static async deleteItem(item) {
		const response = await fetch("http://localhost:3000/item", {
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ item }),
		});
		return response;
	}
}
