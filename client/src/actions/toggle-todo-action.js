import {
	TOGGLE_TODO_REQUEST,
	TOGGLE_TODO_SUCESS,
	TOGGLE_TODO_FAILURE,
} from "./index";

export const toggleTodoRequest = () => {
	return {
		type: TOGGLE_TODO_REQUEST,
	};
};

export const toggleTodoSucess = (payload) => {
	return {
		type: TOGGLE_TODO_SUCESS,
		payload,
	};
};

export const toggleTodoFailure = (error) => {
	return {
		type: TOGGLE_TODO_FAILURE,
		payload: error,
	};
};
