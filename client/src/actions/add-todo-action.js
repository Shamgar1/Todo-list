import actionsTypes from "./index";
import ListApiService from "../services/list-api-service";

const addTodoRequest = () => ({
	type: actionsTypes.ADD_TODO_REQUEST,
});

const addTodoSucess = (todos) => ({
	type: actionsTypes.ADD_TODO_SUCESS,
	todos,
});

const addTodoFailure = (error) => ({
	type: actionsTypes.ADD_TODO_FAILURE,
	error,
});

export const addAnotherItem = (name) => {
	return (dispatch) => {
		try {
			dispatch(addTodoRequest());
			ListApiService.postItem(name)
				.then((res) => res.json())
				.then((name) => {
					dispatch(addTodoSucess(name));
				});
		} catch (error) {
			dispatch(addTodoFailure(error));
		}
	};
};
