import {
	DELETE_TODO_REQUEST,
	DELETE_TODO_SUCESS,
} from "../actions/constants/index";
import ListApiService from "../services/list-api-service";
// import actionsTypes from "./constants/index";

const deleteTodoRequest = () => ({
	type: DELETE_TODO_REQUEST,
});
const deleteTodoSucess = () => ({
	type: DELETE_TODO_SUCESS,
});

export const deleteTodo = (itemName) => {
	console.log("second");
	debugger;
	return (dispatch) => {
		debugger;
		console.log("hay");
		dispatch(deleteTodoRequest);
		ListApiService.deleteItem(itemName).then((res) =>
			dispatch(deleteTodoSucess)
		);
		// dispatch({ type: actionsTypes.DELETE_TODO, payload: newItem });
	};
};
// // export const addTodo = (todo) => {
// 	console.log("second");
// 	debugger;
// 	return (dispatch) => {
// 		debugger;
// 		console.log("1");
// 		dispatch(addTodoRequest);
// 		ListApiService.postItem(todo).then((res) =>
// 			// console.log(res.data);
// 			// console.log(data);
// 			dispatch(addTodoSucess(res.data))
// 		);
// 	};
// };

// module.exports = { addTodo };
// export default deleteTodo;
