import {
	GET_TODO_REQUEST,
	ADD_TODO_REQUEST,
	DELETE_TODO_REQUEST,
	TOGGLE_TODO_REQUEST,
} from "../actions/index";

const initialState = {
	isLoading: false,
	todos: [],
	error: false,
};

const itemsEntitiesReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case GET_TODO_REQUEST:
			return {
				...state,
				isLoading: false,
				error: false,
			};

		////// adding reducer
		case ADD_TODO_REQUEST: {
			return {
				...state,
				isLoading: true,
				error: false,
			};
		}

		//////deleting reducer
		case DELETE_TODO_REQUEST: {
			return {
				...state,
				isLoading: true,
				error: false,
			};
		}

		//////// update check

		case TOGGLE_TODO_REQUEST:
			return {
				...state,
				isLoading: true,
				error: false,
			};

		default:
			return state;
	}
};

export default itemsEntitiesReducer;
