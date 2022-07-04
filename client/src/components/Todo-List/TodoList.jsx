import React, { useCallback, useEffect, useState } from "react";
import Todo from "../Todo/Todo";
import "../Todo-List/TodoList.scss";
import ListApiService from "../../services/list-api-service";
import { useDispatch } from "react-redux";
import addTodo from "../../actions/add-todo-action";
import getAllTodos from "../../actions/get-all-todos-action";
import deleteTodo from "../../actions/get-all-todos-action";

const TodoList = () => {
	const dispatch = useDispatch();
	let [value, setValue] = useState("");
	let [search, setSearch] = useState("");
	let [list, setList] = useState([]);
	// let [foundTodos, setFoundTodos] = useState(list);
	// const [searchParam] = useState(["itemName"]);
	useEffect(() => {
		ListApiService.getItems().then((todos) => {
			setList(todos);
		});
		// dispatch(getAllTodos());
		// getItemsFromServer();
		// setList(todos);
	}, []);

	// const getItemsFromServer = async () => {
	// 	await dispatch(getAllTodos()).then((todos) => {
	// 		console.log(todos);
	// 		setList(todos);
	// 	});
	// 	// setList(todos);
	// };

	// const getItemsFromServer = useCallback(() => {
	// 	dispatch(getAllTodos()).then((todos) => {
	// 		console.log(todos);
	// 		setList(todos);
	// 	});
	// }, [setList]);

	// const todos = useCallback(() => {
	// 	getAllTodos(todos);
	// }, [getAllTodos, todos]);
	// useEffect(() => {
	// 	// dispatch(getAllTodos());
	// 	getItemsFromServer();
	// }, []);

	// const getItemsFromServer = useCallback(
	// 	(data) => {
	// 		setList(data);
	// 	},
	// 	[setList]
	// );
	// 	await getItems().then((todos) => {
	// 		setList(todos);
	// 	});
	// };

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	const handleTrashClicked = async (id) => {
		await dispatch(deleteTodo(id)).then(() => {
			// getItemsFromServer();
		});
	};

	const handleCheckClicked = (id, statusItem) => {
		const isDone = ({ statusItem } = true);
		ListApiService.postIsCompleted(id, isDone).then(() => {
			// getItemsFromServer();
		});
	};

	// const postIsCompleted = async (id, isDone) => {
	// 	await fetch(`http://localhost:3000/item/${id}`, {
	// 		method: "POST",
	// 		headers: { "Content-Type": "application/json" },
	// 		body: JSON.stringify({ id, isDone }),
	// 	});
	// };

	const handleClick = async (e) => {
		// const response = await ListApiService.postItem(value);
		dispatch(addTodo(value));
		// await getItemsFromServer();
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

	// const deleteItem = async (item) => {
	// 	await fetch("http://localhost:3000/item", {
	// 		method: "DELETE",
	// 		headers: { "Content-Type": "application/json" },
	// 		body: JSON.stringify({ item }),
	// 	});
	// };

	const filter = (e) => {
		const keyword = e.target.value;

		if (keyword !== "") {
			const results = list.filter((item) => {
				return item.itemName.toLowerCase().startsWith(keyword.toLowerCase());
				// Use the toLowerCase() method to make it case-insensitive
			});
			setList(results);
		} else {
			setList(list);
			// If the text field is empty, show all users
		}

		setSearch(keyword);
	};
	return (
		<div>
			<div className="search-wrapper">
				<label htmlFor="search-form">
					<input
						type="search"
						value={search}
						onChange={filter}
						className="searchInput"
						placeholder="Filter"
					/>
					<span className="sr-only">Search todo here</span>
				</label>
			</div>
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
				{list && list.length > 0 ? (
					list.map((item, key) => (
						<li className="li" key={key}>
							<Todo
								itemName={item.itemName}
								itemId={item.id}
								statusItem={item.status}
								handleDelete={handleTrashClicked}
								handleCheck={handleCheckClicked}
							/>
						</li>
					))
				) : (
					<h1>No results found!</h1>
				)}
			</ul>
		</div>
	);
};

export default TodoList;
