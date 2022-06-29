class ItemClient {
	getItems = async () => {
		const response = await fetch("http://localhost:3000/items");
		const todos = await response.json();
		return todos;
	};

	postItem = async (item) => {
		await fetch("http://localhost:3000/item", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ item }),
		});
	};

	postIsCompleted = async (id, isCompletedValue) => {
		await fetch(`http://localhost:3000/items/${id}`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ isCompletedValue }),
		});
	};

	deleteItem = async (item) => {
		await fetch("http://localhost:3000/item", {
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ item }),
		});
	};
}
