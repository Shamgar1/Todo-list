import React, { useEffect } from "react";
import { getAllTodos } from "../../actions/get-all-todos-action";
import { deleteTodo } from "../../actions/delete-todo-action";
import { connect } from "react-redux";
import Todo from "../Todo/Todo";
import AddToDo from "./AddToDo";

// import { addTodo } from "../../actions/add-todo-action";

export function ListContainer({ getAllTodos, itemData, deleteTodo }) {
	useEffect(() => {
		getAllTodos();
	}, []);

	const handleTrashClicked = (itemName) => {
		console.log("first");
		deleteTodo({ itemName }).then((res) => {
			console.log("did it", res);
			// getItemsFromServer();
			// });
		});
	};

	// handleClick = async (e) => {
	// 	console.log("1");
	// 	addTodo(value);
	// 	// this.setState({ todo: "" });
	// 	getAllTodos();
	// };

	// 	componentDidUpdate() {
	//   // Typical usage (don't forget to compare props):
	//   if (this.props.AddToDo !== prevProps.userID) {
	//     this.getAllTodos();
	//   }
	// }
	// const handleClick = async (e) => {
	// 	addTodo(value);
	// 	// console.log(newItem);
	// };

	//     const handleClick = () => {
	//     if(todo){
	//         const payload = {title: todo, status: false}
	//         addTodo(payload)
	//         setTodo("")
	//     }
	// };

	return itemData.loading ? (
		<h2>Loading</h2>
	) : itemData.error ? (
		<h2>{itemData.error}</h2>
	) : (
		<div>
			<AddToDo
			// handleAdd={handleClick}
			// handleChange={handleTextChange}
			// handleSubmit={handleSubmitButton}
			// value={value}
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
								handleDelete={handleTrashClicked}
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
const mapDispatchToPropsNew = (dispatch) => {
	return {
		deleteTodo: () => dispatch(deleteTodo()),
	};
};
// const mapDispatchToAddTodo = (dispatch) => {
// 	return {
// 		onAddTodoClick: () => dispatch(setTool(Tools.AddToDo)),
// 	};
// };
connect(mapDispatchToPropsNew, mapStateToProps);
export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
