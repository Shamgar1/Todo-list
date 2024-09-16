import actionsTypes from "./index";
import ListApiService from "../services/list-api-service";

const toggleTodoRequest = () => ({
	type: actionsTypes.TOGGLE_TODO_REQUEST,
});
const toggleTodoSucess = (todos) => ({
	type: actionsTypes.TOGGLE_TODO_SUCESS,
	todos,
});

const toggleTodoFailure = (error) => ({
	type: actionsTypes.TOGGLE_TODO_FAILURE,
	error,
});

export const updateStatus = (item) => {
	return (dispatch) => {
		try {
			dispatch(toggleTodoRequest());
			ListApiService.toggleDone(item).then((todos) => {
				dispatch(toggleTodoSucess(todos));
			});
		} catch (error) {
			dispatch(toggleTodoFailure(error));
		}
	};
};
