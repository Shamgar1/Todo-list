import {
	DELETE_TODO_REQUEST,
	DELETE_TODO_SUCESS,
	DELETE_TODO_FAILURE,
} from "./index";

export const deleteTodoRequest = () => ({
	type: DELETE_TODO_REQUEST,
});
export const deleteTodoSucess = (payload) => ({
	type: DELETE_TODO_SUCESS,
	payload,
});

export const deleteTodoFailure = (error) => ({
	type: DELETE_TODO_FAILURE,
	payload: error,
});
