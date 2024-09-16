import actionsTypes from "./index";
import ListApiService from "../services/list-api-service";

const deleteTodoRequest = () => ({
	type: actionsTypes.DELETE_TODO_REQUEST,
});

const deleteTodoSucess = (todos) => ({
	type: actionsTypes.DELETE_TODO_SUCESS,
	todos,
});

const deleteTodoFailure = () => ({
	type: actionsTypes.DELETE_TODO_FAILURE,
});

export const deleteTodo = (item) => {
	return (dispatch) => {
		try {
			dispatch(deleteTodoRequest());
			ListApiService.deleteItem(item).then((item) => {
				dispatch(deleteTodoSucess(item));
			});
		} catch (err) {
			dispatch(deleteTodoFailure(err));
		}
	};
};
