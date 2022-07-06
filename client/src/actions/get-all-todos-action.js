// import { GET_ALL_TODOS } from "./constants/index";
import ListApiService from "../services/list-api-service";
// import type from "./constants/index";
import {
	GET_TODO_REQUEST,
	GET_TODO_SUCESS,
	GET_TODO_FAILURE,
} from "../actions/constants/index";

export const getTodoRequest = () => {
	return {
		type: GET_TODO_REQUEST,
	};
};

export const getTodoSucess = (payload) => {
	return {
		type: GET_TODO_SUCESS,
		payload,
	};
};

export const getTodoFailure = (error) => {
	return {
		type: GET_TODO_FAILURE,
		payload: error,
	};
};

export const getAllTodos = () => {
	return (dispatch) => {
		dispatch(getTodoRequest);
		ListApiService.getItems().then((todos) => {
			dispatch(getTodoSucess(todos));
		});
		// .catch(error=> {
		// 	const errorMsg = error.message
		// })
	};
};
