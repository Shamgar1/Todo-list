import {
	GET_TODO_SUCESS,
	GET_TODO_FAILURE,
	ADD_TODO_SUCESS,
	ADD_TODO_FAILURE,
	DELETE_TODO_SUCESS,
	DELETE_TODO_FAILURE,
	TOGGLE_TODO_SUCESS,
	TOGGLE_TODO_FAILURE,
	SEARCH_SUCESS,
	SEARCH_FAILURE,
} from "../actions/index";

const initialState = {
	todos: [],
	error: false,
	isLoading: false,
};

const itemsViewReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case GET_TODO_SUCESS:
			return {
				...state,
				todos: payload,
				isLoading: false,
				error: false,
			};
		case GET_TODO_FAILURE:
			return {
				...state,
				isLoading: false,
				error: true,
			};
		case ADD_TODO_SUCESS: {
			let newTodos = (state.todos, payload);
			return {
				...state,
				todos: newTodos,
				isLoading: false,
				error: false,
			};
		}

		case ADD_TODO_FAILURE: {
			return {
				...state,
				isLoading: false,
				error: true,
			};
		}
		case DELETE_TODO_SUCESS: {
			if (!state.todos.payload) {
				return null;
			}
			const leftTodos = state.todos.payload.filter(
				(item) => item.id !== payload.id
			);
			debugger;
			return { ...state, todos: leftTodos, isLoading: false, error: false };
		}

		case DELETE_TODO_FAILURE:
			return {
				...state,
				isLoading: false,
				error: true,
			};

		case TOGGLE_TODO_SUCESS:
			let newToggledTodos = state.todos.payload.map((item) =>
				item.id === payload.id ? payload : item
			);
			return {
				...state,
				todos: newToggledTodos,
				isLoading: false,
				error: false,
			};

		case TOGGLE_TODO_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: true,
			};

		case SEARCH_SUCESS:
			if (!state.todos) {
				return null;
			}
			// let searchItems = state.todos.payload.filter((item) =>
			// 	// item.id === payload.id ? payload : item
			// 	item.itemName.includes(payload.payload)
			// );
			debugger;
			const todos = state.todos.todos.filter((item) =>
				item.itemName.toLowerCase().includes(payload.payload.toLowerCase())
			);
			// (item) => item.id !== payload.id
			debugger;
			return { ...state, todos, isLoading: false, error: false };

		// console.log(searchItems);
		// return {
		// 	todos: searchItems,
		// 	isLoading: false,
		// 	error: false,
		// };

		case SEARCH_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		default:
			return state;
	}
};

export default itemsViewReducer;
