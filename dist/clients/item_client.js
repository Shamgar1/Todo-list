class ItemClient {
	getItems = async () => {
		const response = await fetch("/items");
		const todos = await response.json();
		return todos;
	};

	postItem = async (item) => {
		await fetch("/item", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ item }),
		});
	};

	postIsCompleted = async (id, isCompletedValue) => {
		await fetch(`/item/${id}`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ isCompletedValue }),
		});
	};

	deleteItem = async (item) => {
		await fetch("/item", {
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ item }),
		});
	};
}
