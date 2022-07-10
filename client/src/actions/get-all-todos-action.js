// import { GET_TODO_REQUEST, GET_TODO_SUCESS, GET_TODO_FAILURE } from "./index";
import actionsTypes from "./index";

const get = (todos) => ({
	type: actionsTypes.GET_TODO_SUCESS,
	todos,
});

export const getTodoSucess = (todos) => {
	return (dispatch) => {
		dispatch(get(todos));
	};
};
// const get = () => ({
// 	type: actionsTypes.GET_TODO_SUCESS,
// });
// const get = () => ({
// 	type: actionsTypes.GET_TODO_SUCESS,
// });

// export const getTodoRequest = () => {
// 	return {
// 		type: GET_TODO_REQUEST,
// 	};
// };

// export const getTodoSucess = (todos) => {
// 	return {
// 		type: GET_TODO_SUCESS,
// 		todos,
// 	};
// };

// export const getTodoFailure = (error) => {
// 	return {
// 		type: GET_TODO_FAILURE,
// 		payload: error,
// 	};
// };
