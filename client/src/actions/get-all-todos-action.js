// import { GET_TODO_REQUEST, GET_TODO_SUCESS, GET_TODO_FAILURE } from "./index";
import actionsTypes from "./index";
import ListApiService from "../services/list-api-service";

const getTodoRequest = () => ({
	type: actionsTypes.GET_TODO_REQUEST,
});
const getTodoSucess = (todos) => ({
	type: actionsTypes.GET_TODO_SUCESS,
	todos,
});

const getTodoFailure = (error) => ({
	type: actionsTypes.GET_TODO_FAILURE,
	error,
});

export const getTodo = () => {
	return (dispatch) => {
		try {
			dispatch(getTodoRequest());
			ListApiService.getItems().then((res) => {
				dispatch(getTodoSucess(res));
			});
		} catch (err) {
			dispatch(getTodoFailure(err));
		}
	};
};
