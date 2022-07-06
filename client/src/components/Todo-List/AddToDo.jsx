import React, { useEffect, useState } from "react";
import Todo from "../Todo/Todo";
import "../Todo-List/TodoList.scss";
import { addTodo } from "../../actions/add-todo-action";
import { ListContainer } from "../../components/Todo-List/ListContainer";
import { getAllTodos } from "../../components/Todo-List/ListContainer";
import PropTypes from "prop-types";

import { connect } from "react-redux";

// import PropTypes from "prop-types";
function AddTodo(props) {
	const { handleAdd, value, handleChange, handleSubmit } = props;
	// class AddToDo extends React.Component {
	// 	state = {
	// 		todo: "",
	// 	};

	// componentDidUpdate() {
	//     if (this.props.state.currentTool === Tools.CHILD1TOOL) {
	//         this.callbackHandleClick()
	//     }
	// }

	// handleTextChange = (e) => {
	// 	setState({ todo: e.target.value });
	// };

	handleSubmitButton = (event) => {
		event.preventDefault();
	};
	// .then((response) => {
	// 	console.log(response);
	// });
	// console.log(newItem);

	// const handleTrashClicked = (id) => {
	// 	// deleteItem({ id }).then(() => {
	// 	// 	getItemsFromServer();
	// 	// });
	// };

	// const handleCheckClicked = (id, statusItem) => {
	// 	// const isDone = ({ statusItem } = true);
	// 	// postIsCompleted(id, isDone).then(() => {
	// 	// 	getItemsFromServer();
	// 	// });
	// };

	return (
		<form onSubmit={handleSubmit}>
			<input
				className="todoInput"
				type="text"
				value={value}
				name="todo"
				onChange={handleChange}
				placeholder="Enter new to do"
			/>
			<button onClick={handleAdd} className="submitButton" type="submit">
				+{" "}
			</button>
		</form>
	);
}

AddTodo.propTypes = {
	value: PropTypes.string,
	// id: PropTypes.number,
	// status: PropTypes.bool,
};

// const mapStateToProps = (state) => {
// 	console.log(state);
// 	return {
// 		itemData: state.itemsEntities,
// 	};
// };

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		addTodo: (todo) => dispatch(addTodo(todo)),
// 	};
// };
// export default connect(mapStateToProps, mapDispatchToProps)(AddToDo);

export default AddTodo;
