import actionsTypes from "../actions/index";
const initialState = {
	todos: [],
	error: false,
	isLoading: false,
};

const itemsViewReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionsTypes.GET_TODO_SUCESS:
			return {
				...state,
				todos: action.todos,
				isLoading: false,
				error: false,
			};

		case actionsTypes.ADD_TODO_SUCESS: {
			let newTodos = (state.todos, action.todos);
			return {
				...state,
				todos: newTodos,
				isLoading: false,
				error: false,
			};
		}

		case actionsTypes.DELETE_TODO_SUCESS: {
			return {
				...state,
				todos: action.todos,
				isLoading: false,
				error: false,
			};
		}

		case actionsTypes.TOGGLE_TODO_SUCESS:
			return {
				...state,
				todos: action.todos,
				isLoading: false,
				error: false,
			};

		case actionsTypes.SEARCH_SUCESS:
			if (!state.todos) {
				return null;
			}
			const searchedItem = state.todos.filter((item) =>
				item.itemName.startsWith([action.todos])
			);

			return { ...state, todos: searchedItem, isLoading: false, error: false };

		case actionsTypes.SHOW_COMPLETED_ITEMS:
			let completedItems = state.todos.filter((item) => item.status === true);

			return {
				...state,
				todos: completedItems,
				error: false,
				isLoading: false,
				action,
			};

		case actionsTypes.SHOW_NOT_COMPLETES_ITEMS:
			let notCompletedItems = state.todos.filter(
				(item) => item.status === false
			);
			return {
				...state,
				todos: notCompletedItems,
				error: false,
				isLoading: false,
				action,
			};

		default:
			return state;
	}
};

export default itemsViewReducer;
