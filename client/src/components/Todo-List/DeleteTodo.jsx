import React from "react";
// import Todo from "../Todo/Todo";
import "../Todo-List/TodoList.scss";
import { addTodo } from "../../actions/add-todo-action";
// import { ListContainer } from "../../components/Todo-List/ListContainer";
// import { getAllTodos } from "../../components/Todo-List/ListContainer";

import { connect } from "react-redux";

// import PropTypes from "prop-types";
class AddToDo extends React.Component {
	state = {
		todo: "",
	};
	handleTextChange = (e) => {
		this.setState({ todo: e.target.value });
	};
	handleSubmit = (event) => {
		event.preventDefault();
	};

	handleClick = async (e) => {
		await this.props.addTodo(this.state.todo);
		// this.setState({ todo: "" });
		// componentDidUpdate() {
		//     if (this.props.state.currentTool === Tools.CHILD1TOOL) {
		//         this.callbackHandleClick()
		//     }
		// }

		// .then((response) => {
		// 	console.log(response);
		// });
		// console.log(newItem);
	};

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

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					className="todoInput"
					type="text"
					value={this.state.todo}
					name="todo"
					onChange={this.handleTextChange}
					placeholder="Enter new to do"
				/>
				<button
					onClick={this.handleClick}
					className="submitButton"
					type="submit"
				>
					+{" "}
				</button>
			</form>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return {
		itemData: state.itemsEntities,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addTodo: (todo) => dispatch(addTodo(todo)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(AddToDo);

// export default connect (mapStateToProps)AddToDo;
