import actionsTypes from "../actions/index";
const initialState = {
	error: false,
	isLoading: false,
};

const itemsViewReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionsTypes.GET_TODO_REQUEST:
			return {
				...state,
				isLoading: true,
			};
		case actionsTypes.GET_TODO_SUCESS:
			return {
				...state,
				isLoading: false,
				error: false,
			};
		case actionsTypes.GET_TODO_FAILURE:
			return {
				...state,
				isLoading: false,
				error: true,
			};

		case actionsTypes.ADD_TODO_SUCESS: {
			return {
				...state,
				isLoading: false,
				error: false,
			};
		}

		case actionsTypes.DELETE_TODO_REQUEST: {
			return {
				...state,
				isLoading: true,
				error: false,
			};
		}
		case actionsTypes.DELETE_TODO_SUCESS: {
			return {
				...state,
				isLoading: false,
				error: false,
			};
		}
		case actionsTypes.DELETE_TODO_FAILURE: {
			return {
				...state,
				isLoading: false,
				error: true,
			};
		}
		case actionsTypes.TOGGLE_TODO_REQUEST:
			return {
				...state,
				isLoading: true,
				error: false,
			};
		case actionsTypes.TOGGLE_TODO_SUCESS:
			return {
				...state,
				isLoading: false,
				error: false,
			};
		case actionsTypes.TOGGLE_TODO_FAILURE:
			return {
				...state,
				isLoading: false,
				error: true,
			};

		case actionsTypes.SEARCH_REQUEST:
			return { ...state, isLoading: true, error: false };

		case actionsTypes.SEARCH_SUCESS:
			return { ...state, isLoading: false, error: false };

		case actionsTypes.SEARCH_FAILURE:
			return { ...state, isLoading: false, error: true };

		case actionsTypes.SHOW_COMPLETED_ITEMS:
			return {
				...state,
				error: false,
				isLoading: false,
			};

		case actionsTypes.SHOW_NOT_COMPLETES_ITEMS:
			return {
				...state,
				error: false,
				isLoading: false,
			};

		default:
			return state;
	}
};

export default itemsViewReducer;
