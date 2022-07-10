

import actionsTypes from "./index";

const search = (todos) => ({
	type: actionsTypes.SEARCH_SUCESS,
	todos,
});


export const searchSucsess = (todos) => {
	
	return (dispatch) => {
		dispatch(search(todos));
	};

};

