import { SEARCH_REQUEST, SEARCH_SUCESS, SEARCH_FAILURE } from "./index";

export const searchRequest = () => {
	return {
		type: SEARCH_REQUEST,
	};
};

export const searchSucsess = (payload) => {
	return {
		type: SEARCH_SUCESS,
		payload,
	};
};

export const searchFailure = (error) => {
	return {
		type: SEARCH_FAILURE,
		payload: error,
	};
};
