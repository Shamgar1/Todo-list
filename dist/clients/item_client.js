// Create an ItemClient class here. This is what makes requests to your express server (your own custom API!)
class ItemClient {
	constructor() {
		this.API_BASE = "http://localhost:3000";
	}

	async renderItems() {
		const url = `${this.API_BASE}/api/todo`;
		console.log(url);
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
			// .then((res) => res.json())
			// .then((res) => console.log(res));
			.then((res) => res.json())
			.then(function (res) {
				// location.reload();
				let item = res;
				return item();
			})
			.catch((error) => {
				console.log(error);
				return error;
			});
	}

	async deleteItem(itemId) {
		const res = await fetch(`/api/todo/${itemId}`, { method: "DELETE" }).then(
			(res) => res.json()
		);
		return res.json();
	}
}
// const itemClient = new ItemClient();

// document.addEventListener("DOMContentLoaded", function () {
// 	itemClient.renderItems();
// });
// renderItems;
//     async renderItems(items) {
//   const res = await fetch("/api/todo")
//   const data = await res.json();
// 	return res.json();
// }

//

//

// export default itemClient;
