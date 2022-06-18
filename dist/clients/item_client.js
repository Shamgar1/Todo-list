// Create an ItemClient class here. This is what makes requests to your express server (your own custom API!)
class ItemClient {
	constructor() {
		this.API_BASE = "http://localhost:3000";
	}

	async renderItems() {
		const url = `${this.API_BASE}/api/todo`;
		const res = await fetch(url);
		const data = await res.json();
		return data;
	}

	async addTodo(todoInput) {
		await fetch(`${this.API_BASE}/api/todo`, {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({ todoInput }),
		})
			.then((res) => res.json())
			.catch((error) => {
				console.log(error);
				return error;
			});
	}

	async deleteItem(itemId) {
		await fetch(`${this.API_BASE}/api/todo/${itemId}`, {
			method: "DELETE",
		});
	}
}
