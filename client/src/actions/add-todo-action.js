import {
	ADD_TODO_SUCESS,
	ADD_TODO_REQUEST,
	ADD_TODO_FAILURE,
} from "./index";

export const addTodoRequest = () => ({
	type: ADD_TODO_REQUEST,
});

export const addTodoSucess = (payload) => {
	return {
		type: ADD_TODO_SUCESS,
		payload,
	};
};

export const addTodoFailure = (error) => {
	return {
		type: ADD_TODO_FAILURE,
		payload: error,
	};
};

