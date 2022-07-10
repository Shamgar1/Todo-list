// import { SEARCH_REQUEST, SEARCH_SUCESS, SEARCH_FAILURE } from "./index";

import actionsTypes from "./index";

const search = (todos) => ({
	type: actionsTypes.SEARCH_SUCESS,
	todos,
});

// export const getTodoSucess = () => {
// 	return (dispatch) => {
// 		dispatch(get());
// 	};
// };
// export const searchRequest = () => {
// 	return {
// 		type: SEARCH_REQUEST,
// 	};
// };

export const searchSucsess = (todos) => {
	// debugger;
	return (dispatch) => {
		dispatch(search(todos));
	};
	//
	// return {
	// 	type: SEARCH_SUCESS,
	// 	todos,
	// };
};

// export const searchFailure = (error) => {
// 	return {
// 		type: SEARCH_FAILURE,
// 		payload: error,
// 	};
// };
