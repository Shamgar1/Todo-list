import { GET_TODO_REQUEST, GET_TODO_SUCESS, GET_TODO_FAILURE } from "./index";

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
