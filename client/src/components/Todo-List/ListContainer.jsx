import React, { useEffect } from "react";
import { getAllTodos } from "../../actions/get-all-todos-action";
import { connect } from "react-redux";
import Todo from "../Todo/Todo";
import AddToDo from "./AddToDo";

// import { addTodo } from "../../actions/add-todo-action";

function ListContainer({ getAllTodos, itemData, addTodo }) {
	useEffect(() => {
		getAllTodos();
	}, []);

	handleClick = async (e) => {
		console.log("1");
		addTodo(value);
		// this.setState({ todo: "" });
		getAllTodos();
	};

	// 	componentDidUpdate() {
	//   // Typical usage (don't forget to compare props):
	//   if (this.props.AddToDo !== prevProps.userID) {
	//     this.getAllTodos();
	//   }
	// }
	const handleClick = async (e) => {
		addTodo(value);
		// console.log(newItem);
	};

	//     const handleClick = () => {
	//     if(todo){
	//         const payload = {title: todo, status: false}
	//         addTodo(payload)
	//         setTodo("")
	//     }
	// };

	const handleTrashClicked = (id) => {
		// deleteItem({ id }).then(() => {
		// 	getItemsFromServer();
		// });
	};

	return itemData.loading ? (
		<h2>Loading</h2>
	) : itemData.error ? (
		<h2>{itemData.error}</h2>
	) : (
		<div>
			<AddToDo
				handleAdd={handleClick}
				handleChange={handleTextChange}
				handleSubmit={handleSubmitButton}
				value={value}
			/>
			<div>
				{itemData &&
					itemData.todos &&
					itemData.todos.map((item, key) => (
						<li className="li" key={key}>
							<Todo
								itemName={item.itemName}
								itemId={item.id}
								statusItem={item.status}
								// handleDelete={handleTrashClicked}
								// handleCheck={handleCheckClicked}
							/>
						</li>
					))}
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	console.log(state);
	return {
		itemData: state.itemsEntities,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getAllTodos: () => dispatch(getAllTodos()),
	};
};
// const mapDispatchToAddTodo = (dispatch) => {
// 	return {
// 		onAddTodoClick: () => dispatch(setTool(Tools.AddToDo)),
// 	};
// };
export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
