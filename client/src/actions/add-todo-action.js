import {
	ADD_TODO_SUCESS,
	ADD_TODO_REQUEST,
	ADD_TODO_FAILURE,
} from "../actions/constants/index";
import ListApiService from "../services/list-api-service";
// import actionsTypes from "./constants/index";
// import { getAllTodos } from "../../actions/get-all-todos-action";

export const addTodoRequest = () => ({
	type: ADD_TODO_REQUEST,
});

export const addTodoSucess = () => {
	return {
		type: ADD_TODO_SUCESS,
	};
};

export const addTodoFailure = (error) => {
	return {
		type: ADD_TODO_FAILURE,
		payload: error,
	};
};

export const addTodo = (todo) => {
	console.log("second");
	debugger;
	return (dispatch) => {
		debugger;
		console.log("1");
		dispatch(addTodoRequest);
		ListApiService.postItem(todo).then((res) =>
			// console.log(res.data);
			// console.log(data);
			dispatch(addTodoSucess(res.data))
		);
	};
};

// export const getAllTodos = () => {
// 	return (dispatch) => {
// 		dispatch(getTodoRequest);
// 		ListApiService.getItems().then((todos) => {
// 			dispatch(getTodoSucess(todos));
// 		});
// 		// .catch(error=> {
// 		// 	const errorMsg = error.message
// 		// })
// 	};
// };

// module.exports = { addTodo };
// export default addTodo;
