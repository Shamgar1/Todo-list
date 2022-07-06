import React, { useEffect } from "react";
import { addTodo } from "../../actions/add-todo-action";
import { connect } from "react-redux";
import Todo from "../Todo/Todo";
import TodoList from "./TodoList";
// import { addTodo } from "../../actions/add-todo-action";

function ListContainer({ addTodo, itemData }) {
	useEffect(async () => {
		await addTodo(value);
	}, []);

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
			<TodoList />
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
	// console.log(state);
	return {
		itemData: state.itemsEntities,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getAllTodos: () => dispatch(getAllTodos()),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);

// export default TodoList;
