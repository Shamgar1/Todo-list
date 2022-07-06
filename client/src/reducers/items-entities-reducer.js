import {
	GET_TODO_REQUEST,
	GET_TODO_SUCESS,
	GET_TODO_FAILURE,
	ADD_TODO_SUCESS,
	ADD_TODO_REQUEST,
	ADD_TODO_FAILURE,
} from "../actions/constants/index";

const initialState = {
	loading: false,
	todos: [],
	error: "",
};

const itemsEntitiesReducer = (state = initialState, action) => {
	debugger;
	// const { type, payload } = action;
	switch (action.type) {
		// switch (type) {
		case GET_TODO_REQUEST:
			return {
				...state,
				loading: true,
			};

		case GET_TODO_SUCESS:
			return {
				loading: false,
				todos: action.payload,
				error: "",
				// },
			};

		case GET_TODO_FAILURE:
			return {
				...state,
				// data:{...state.data, isLoading: false, isError:payload}
				loading: false,
				error: true,
			};

		case ADD_TODO_REQUEST: {
			return {
				...state,
				loading: false,
				error: false,
			};
		}
		case ADD_TODO_SUCESS: {
			return {
				...state,
				// itemName: [action.payload],
				loading: true,
				error: true,
			};
		}
		// case ADD_TODO_FAILURE: {
		// 	return {
		// 		...state,
		// 		itemName: [action.payload],
		// 	};
		// }
		// case actionTypes.DELETE_TODO: {
		// 	return {
		// 		...state,
		// 		itemName: [action.payload],
		// 	};
		// }
		default:
			return state;
	}
};

export default itemsEntitiesReducer;
