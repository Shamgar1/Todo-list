import React, { useEffect, useState } from "react";
import Todo from "../Todo/Todo";
import "../Todo-List/TodoList.scss";
import { addTodo } from "../../actions/add-todo-action";

// import PropTypes from "prop-types";
const AddTodo = () => {
	const [todo, setTodo] = useState("");
	let [value, setValue] = useState("");
	let [list, setList] = useState([]);
	useEffect(() => {
		// handleClick();
		// addTodo(value);
		// 	// console.log(newItem);
	}, []);

	const handleClick = async (e) => {
		// await addTodo(value)
		// .then((response) => {
		// 	console.log(response);
		// });
		// console.log(newItem);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	const handleTrashClicked = (id) => {
		// deleteItem({ id }).then(() => {
		// 	getItemsFromServer();
		// });
	};

	const handleCheckClicked = (id, statusItem) => {
		// const isDone = ({ statusItem } = true);
		// postIsCompleted(id, isDone).then(() => {
		// 	getItemsFromServer();
		// });
	};

	const handleTextChange = (e) => {
		setValue(e.target.value);
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
		</div>
	);
};

export default AddTodo;
