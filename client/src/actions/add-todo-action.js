// import {
// 	ADD_TODO_SUCESS,
// 	ADD_TODO_REQUEST,
// 	ADD_TODO_FAILURE,
// } from "./index";

import actionsTypes from "./index";
const add = (todos) => ({
	type: actionsTypes.ADD_TODO_SUCESS,
	todos,
});
// export const addTodoRequest = () => ({
// 	type: actionsTypes.ADD_TODO_REQUEST,
// });

export const addTodoSucess = (todos) => {
	return (dispatch) => {
		dispatch(add(todos));
	};
	// type: actionsTypes.ADD_TODO_SUCESS,
	// payload,
};

// export const addTodoFailure = (error) => {
// 	return {
// 		type: ADD_TODO_FAILURE,
// 		payload: error,
// 	};
// };
