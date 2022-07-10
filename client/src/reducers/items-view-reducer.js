// import {
// 	GET_TODO_SUCESS,
// 	GET_TODO_FAILURE,
// 	ADD_TODO_SUCESS,
// 	ADD_TODO_FAILURE,
// 	DELETE_TODO_SUCESS,
// 	DELETE_TODO_FAILURE,
// 	TOGGLE_TODO_SUCESS,
// 	TOGGLE_TODO_FAILURE,
// 	SEARCH_SUCESS,
// 	SEARCH_FAILURE,
// } from "../actions/index";
import actionsTypes from "../actions/index";
const initialState = {
	todos: [],
	error: false,
	isLoading: false,
};

const itemsViewReducer = (state = initialState, action) => {
	// const { type, payload } = action;

	switch (action.type) {
		case actionsTypes.GET_TODO_SUCESS:
			console.log(action.todos);
			debugger;
			console.log(state);
			return {
				...state,
				todos: action.todos,
				isLoading: false,
				error: false,
			};
		// case GET_TODO_FAILURE:
		// 	return {
		// 		...state,
		// 		isLoading: false,
		// 		error: true,
		// 	};
		case actionsTypes.ADD_TODO_SUCESS: {
			let newTodos = (state.todos, action.todos);
			console.log(action.todos);
			debugger;
			return {
				...state,
				todos: newTodos,
				isLoading: false,
				error: false,
			};
		}

		// case ADD_TODO_FAILURE: {
		// 	return {
		// 		...state,
		// 		isLoading: false,
		// 		error: true,
		// 	};
		// }
		case actionsTypes.DELETE_TODO_SUCESS: {
			// if (!state.todos.payload) {
			// 	return null;
			// }

			debugger;
			console.log(state);
			console.log(action.todos);
			return {
				...state,
				todos: action.todos,
				isLoading: false,
				error: false,
			};
		}
		// case DELETE_TODO_FAILURE:
		// 	return {
		// 		...state,
		// 		isLoading: false,
		// 		error: true,
		// 	};

		case actionsTypes.TOGGLE_TODO_SUCESS:
			debugger;
			// let newToggledTodos = state.todos.action.todos.map((item) =>
			// 	item.id === action.todos.id ? action.todos : item
			// );
			// console.log(newToggledTodos);
			// debugger;
			console.log(state);
			console.log(action.todos);
			debugger;
			return {
				...state,
				todos: action.todos,
				isLoading: false,
				error: false,
			};

		// case TOGGLE_TODO_FAILURE:
		// 	return {
		// 		...state,
		// 		isLoading: false,
		// 		isError: true,
		// 	};

		case actionsTypes.SEARCH_SUCESS:
			if (!state.todos) {
				return null;
			}
			// let searchItems = state.todos.payload.filter((item) =>
			// 	// item.id === payload.id ? payload : item
			// 	item.itemName.includes(payload.payload)
			// );
			debugger;
			const searchedItem = state.todos.filter((item) =>
				item.itemName.startsWith([action.todos])
			);
			console.log(searchedItem);
			// (item) => item.id !== payload.id
			debugger;
			return { ...state, todos: searchedItem, isLoading: false, error: false };

		// console.log(searchItems);
		// return {
		// 	todos: searchItems,
		// 	isLoading: false,
		// 	error: false,
		// };

		// case SEARCH_FAILURE:
		// 	return {
		// 		...state,
		// 		isLoading: false,
		// 		isError: true,
		// 	};
		default:
			return state;
	}
};

export default itemsViewReducer;
