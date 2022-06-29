import React, { useEffect, useState } from "react";
import Todo from "../Todo/Todo";
import "./TodoList.scss";

const TodoList = () => {
	let [value, setValue] = useState("");
	let [list, setList] = useState([]);
	useEffect(() => {
		getItemsFromServer();
	}, []);

	const getItemsFromServer = () => {
		getItems().then((todos) => {
			setList(todos);
		});
	};

	// Promise.all().then(responses => {
	// // 		console.log(responses)}

	const getItems = async () => {
		const response = await fetch("http://localhost:3000/items");
		const todos = await response.json();
		return todos;
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	const handleTrashClicked = (id) => {
		deleteItem({ id }).then(() => {
			getItemsFromServer();
		});
	};

	const handleCheckClicked = (id, completed) => {
		const isDone = !{ completed };
		console.log("hay");
		postIsCompleted({ id, isDone }).then(() => {
			getItemsFromServer();
		});
	};

	const postIsCompleted = async (id, isCompletedValue) => {
		await fetch(`http://localhost:3000/items/${id}`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ isCompletedValue }),
		});
	};

	// const handleClick = (e) => {
	// 	postItem(value);
	// 	Promise.all(value).then(() => {
	// 		getItemsFromServer();
	// 	});
	// };

	const handleClick = (e) => {
		postItem(value).then(() => {
			getItemsFromServer();
		});
	};

	const handleTextChange = (e) => {
		setValue(e.target.value);
	};

	const deleteItem = async (item) => {
		await fetch("http://localhost:3000/item", {
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ item }),
		});
	};

	const postItem = async (item) => {
		await fetch("http://localhost:3000/item", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ item }),
		});
	};

	// const postItem = async (item) => {
	// 	let items = Array.from(value);
	// 	Promise.all(
	// 		items.map((i) => {
	// 			fetch("http://localhost:3000/item", {
	// 				method: "POST",
	// 				headers: { "Content-Type": "application/json" },
	// 				body: JSON.stringify({ i }),
	// 			});
	// 		})
	// 	).then((res) => getItemsFromServer());
	// };

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					class="todoInput"
					type="text"
					value={value}
					onChange={handleTextChange}
					placeholder="Enter new to do"
				/>
				<button onClick={handleClick} class="submitButton" type="submit">
					+{" "}
				</button>
			</form>
			<ul>
				{list.map((item) => (
					<Todo
						itemName={item.itemName}
						itemId={item.id}
						completed={item.status}
						handleDelete={handleTrashClicked}
						handleCheck={handleCheckClicked}
					/>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
