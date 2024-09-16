import actionsTypes from "./index";

const searchRequest = () => ({
	type: actionsTypes.SEARCH_REQUEST,
});
const searchSucsess = (todos) => ({
	type: actionsTypes.SEARCH_SUCESS,
	todos,
});

const searchFailure = (error) => ({
	type: actionsTypes.SEARCH_FAILURE,
	error,
});

export const searchTodo = (item) => {
	return (dispatch) => {
		try {
			dispatch(searchRequest());
			dispatch(searchSucsess(item));
		} catch (error) {
			dispatch(searchFailure(error));
		}
	};
};
