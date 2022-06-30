import React, { useEffect, useState } from "react";
import Todo from "../Todo/Todo";
import "../Todo-List/TodoList.scss";

const TodoList = () => {
	let [value, setValue] = useState("");
	let [list, setList] = useState([]);
	useEffect(() => {
		getItemsFromServer();
	}, []);

	const getItemsFromServer = async () => {
		await getItems().then((todos) => {
			setList(todos);
		});
	};

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

	const handleCheckClicked = (id, statusItem) => {
		const isDone = ({ statusItem } = true);
		postIsCompleted(id, isDone).then(() => {
			getItemsFromServer();
		});
	};

	const postIsCompleted = async (id, isDone) => {
		await fetch(`http://localhost:3000/item/${id}`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ id, isDone }),
		});
	};

	const handleClick = async (e) => {
		const response = await postItem(value);
		console.log(response);
		const newItem = await getItemsFromServer();
		setValue("");
	};

	// const getItemsFromServer = async () => {
	// 	await getItems().then((todos) => {
	// 		setList(todos);
	// 	});
	// };

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

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					className="todoInput"
					type="text"
					value={value}
					onChange={handleTextChange}
					placeholder="Enter new to do"
				/>
				<button onClick={handleClick} className="submitButton" type="submit">
					+{" "}
				</button>
			</form>
			<ul>
				{list.map((item, key) => (
					<li className="li" key={key}>
						<Todo
							itemName={item.itemName}
							itemId={item.id}
							statusItem={item.status}
							handleDelete={handleTrashClicked}
							handleCheck={handleCheckClicked}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
